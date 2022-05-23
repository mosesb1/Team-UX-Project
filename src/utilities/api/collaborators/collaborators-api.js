import { sendRequest } from "../send-request";
const BASE_URL = '/api/collaborators';

export function createCollaborator(body, projectId){
    return sendRequest(`${BASE_URL}/${projectId}`, "POST", body);
}