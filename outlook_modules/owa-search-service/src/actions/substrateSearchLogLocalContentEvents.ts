import type SubstrateEvent from '../data/schema/SubstrateEvent';
import substrateSearchLogEventsOperation from '../services/substrateSearchPostEventsService';
import type SubstrateSearchScenario from '../data/schema/SubstrateSearchScenario';

export interface LocalContentInstrumentationContext {
    localContentId: string; // generated by client, used to correlate with LocalContentLayout
    entityId?: string; // same across multiple requests but may be different across folders
    contentType: LocalContentType;
    subType?: string;
}

export interface LocalContentLayout {
    entityId: string;
    position: number;
}

// each provider can provide multiple types
export type LocalContentProvider = 'galprovider' | 'categoryprovider' | 'tryprovider';

// different types may belong to the same layout group
export type LocalContentLayoutGroup = 'gal' | 'category' | 'try' | 'setting';

// currently mapped to suggestion kind
export type LocalContentType = 'people' | 'category' | 'try' | 'setting' | 'filter' | 'unknown';

// mapping between entity id to localContentId
let entityIdToLocalContentIdMap: { [entityId: string]: string } = {};

// the search requests that's been logged
let searchRequestsLogged: string[] = [];

// instrument basic properties for each local search content shown to the user
export function logLocalContentDataSource(
    searchRequestId: string,
    providerName: LocalContentProvider,
    localContentInstrumentationContexts: LocalContentInstrumentationContext[],
    substrateSearchScenario: SubstrateSearchScenario
) {
    // create a new clientdatasource event
    const event: SubstrateEvent = { Name: 'clientdatasource', Attributes: [] };

    const providerValue = { Results: [] };
    localContentInstrumentationContexts.forEach(context => {
        providerValue.Results.push({
            ReferenceId: context.localContentId,
            EntityId: context.entityId,
            Type: context.contentType,
        });
    });

    // value is a based 64 encoded JSON string
    event.Attributes.push({ Key: providerName, Value: btoa(JSON.stringify(providerValue)) });
    substrateSearchLogEventsOperation(searchRequestId, event, substrateSearchScenario);

    // cache the data source for layout events later
    updateLocalContentCache(localContentInstrumentationContexts);
}

// instrument layout ordering if there's any difference from what server returned, such as when local contents are added
export function logLocalContentLayout(
    searchRequestId: string,
    localContentLayoutGroups: { [groupType: string]: LocalContentLayout[] },
    substrateSearchScenario: SubstrateSearchScenario
) {
    if (searchRequestsLogged.indexOf(searchRequestId) != -1) {
        // this search request has already been logged
        return;
    }

    // mark this request as logged
    searchRequestsLogged.push(searchRequestId);

    const event: SubstrateEvent = { Name: 'clientlayout', Attributes: [] };

    Object.keys(localContentLayoutGroups).forEach(groupType => {
        const layoutContext = { Results: [] };
        localContentLayoutGroups[groupType].forEach(layout => {
            // clientlayout event uses localContentId to correlate with clientdatasource event
            const localContentId = getLocalContentId(layout.entityId);

            layoutContext.Results.push({ ReferenceId: localContentId, Position: layout.position });
        });

        // value is a based 64 encoded JSON string
        event.Attributes.push({ Key: groupType, Value: btoa(JSON.stringify(layoutContext)) });
    });

    substrateSearchLogEventsOperation(searchRequestId, event, substrateSearchScenario);
}

export function clearLocalContentInstrumentationCache() {
    entityIdToLocalContentIdMap = {};
    searchRequestsLogged = [];
}

export function getLocalContentId(entityId: string): string {
    return entityIdToLocalContentIdMap[entityId];
}

function updateLocalContentCache(
    localContentInstrumentationContexts: LocalContentInstrumentationContext[]
) {
    localContentInstrumentationContexts.forEach(context => {
        entityIdToLocalContentIdMap[context.entityId] = context.localContentId;
    });
}
