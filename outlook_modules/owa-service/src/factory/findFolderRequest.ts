// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type FindFolderRequest from '../contract/FindFolderRequest';

export default function findFolderRequest(data: FindFolderRequest): FindFolderRequest {
    let result: FindFolderRequest = {
        __type: 'FindFolderRequest:#Exchange',
        ...data,
    };

    return result;
}
