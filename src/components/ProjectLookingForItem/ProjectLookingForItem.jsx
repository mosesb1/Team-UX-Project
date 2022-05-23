import './ProjectLookingForItem.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProjectLookingForItem({item, user, project}){
    const [ inboxCategory, setInboxCategory ] = useState('invite')

    const isCollaborator = () => {
        for(let i = 0; i < project.collaborators.length; i++){
            if(user._id === project.collaborators[i].userId){
                return true
            }
        }
        return false
    }

    const determineDisplay = () => {
        return user._id === project.organizer || isCollaborator()
    }

    const invite = () => {
        return
    }

    const interested = () => {
        return
    }
    return (
        <div>
            <h4>{item}</h4>
            <button onClick={determineDisplay() ? invite : interested}>{determineDisplay() ?
                <Link to={'/inbox'} state={{
                    category: inboxCategory,
                    projectId: project._id,
                    projectName: project.projectName,
                    senderId: user._id,
                    senderName: `${user.firstName} ${user.lastName}`,
                    theRole: item,
                    isInvite: true
                }}>Invite</Link>:
                "I'm interested"}
            </button>
        </div>
    )
}