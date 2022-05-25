import { sendRequest } from "../send-request"
const BASE_URL = '/api/messages'

export async function createMessage(senderId,
                                    receiverId,
                                    userName,
                                    receiverN,
                                    theMessage,
                                    threadId,
                                    inviteBool,
                                    projectId,
                                    theRole) {
    const payload = {
        sender: senderId,
        receiver: receiverId,
        senderName: userName,
        receiverName: receiverN,
        message: theMessage,
        thread: threadId,
        isInvite: inviteBool,
        project: projectId,
        role: theRole
    }
    console.log(payload)
    return sendRequest(`${BASE_URL}/${threadId}`, 'POST', payload)
}

export async function deleteMessage(messageId) {
    return sendRequest(`${BASE_URL}/${messageId}`, 'DELETE', messageId)
}

export async function getMessagesByUser(userId) {
    return sendRequest(`${BASE_URL}/all/${userId}`)
}

export async function getUnreadMessages(userId){
    return sendRequest(`${BASE_URL}/unread/${userId}`)
}
