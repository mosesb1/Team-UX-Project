import { sendRequest } from "../send-request"
const BASE_URL = '/api/projects'

export async function createProject(projectData){
    return sendRequest(`${BASE_URL}`, 'POST', projectData)
}

export async function deleteProject(projectId){
    return sendRequest(`${BASE_URL}/${projectId}`, 'DELETE', projectId)
}

export async function getAllProjects(){
    return sendRequest(`${BASE_URL}`, 'GET')
}

export async function editProject(projectChanges){
    return sendRequest(`${BASE_URL}/${projectChanges}`, 'PUT', projectChanges)
}

export async function getProject(projectId){
    return sendRequest(`${BASE_URL}/${projectId}`, 'GET')
}

export function getUserProjects(userId){
    return sendRequest(`${BASE_URL}/user/${userId}`)
}