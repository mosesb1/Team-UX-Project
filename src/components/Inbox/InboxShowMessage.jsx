import { showMessage } from '../../utilities/api/messages/messages-api'
import { createCollaborator } from '../../utilities/api/collaborators/collaborators-api'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Inbox.css'

export default function InboxShowMessage( { messageToShow, setMessageToShow, pageToShow, setPageToShow }) {
    let navigate = useNavigate()

    const accept = async () => {
        console.log(messageToShow)
        const payload = {
            userId: messageToShow.receiver,
            role: messageToShow.role,
            projectId: messageToShow.project
        }
        const response = await createCollaborator(payload, messageToShow.project)
    }

    const decline = async () => {
        console.log('declined')
    }

    const viewProject = async () => {
        // navigate(`/project/:id`)
    }

    const loaded = () => {
        return (
            <div className='show-message'>
                <div className='back-btn' onClick={(e) => {setPageToShow('InboxAllMail')}}>&lt;- Back to inbox</div>
                <div className='from-text'> From: {messageToShow.senderName}</div>
                <div className='message-text'>{messageToShow.message}</div>
                <div className='project-buttons'>
                    <button onClick={(e) => {viewProject()}} >View project</button>
                    <button onClick={(e) => {decline()}} >Decline</button>
                    <button onClick={(e) => {accept()}} >Accept and join project</button>
                </div>
            </div>
        )
    }
    
    const loading = ()  => {
        return
    }

    return messageToShow ? loaded() : loading()
}