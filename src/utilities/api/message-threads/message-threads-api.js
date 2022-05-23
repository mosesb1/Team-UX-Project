import { sendRequest } from "../send-request"
const BASE_URL = '/api/messageThreads'

export async function createThread(users){
    return sendRequest(`${BASE_URL}`, 'POST', users)
}

export async function getThread(ThreadId){
    return sendRequest(`${BASE_URL}`, 'GET', ThreadId)
}

export async function deleteThread(ThreadId){
    return sendRequest(`${BASE_URL}/${ThreadId}`, 'DELETE', ThreadId)
}