// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type RespondToCalendarEventResponse from '../contract/RespondToCalendarEventResponse';

export default function respondToCalendarEventResponse(
    data: RespondToCalendarEventResponse
): RespondToCalendarEventResponse {
    let result: RespondToCalendarEventResponse = {
        __type: 'RespondToCalendarEventResponse:#Exchange',
        ...data,
    };

    return result;
}
