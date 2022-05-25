import ProjectLookingForItem from '../ProjectLookingForItem/ProjectLookingForItem';
import { createMessage, deleteMessage} from '../../utilities/api/messages/messages-api'
import './ProjectLookingFor.css';
import { useEffect, useState } from 'react';

export default function ProjectLookingFor({project, user}){
    const [roleDisplay, setRoleDisplay] = useState([]);

    const getRoleDisplay = () => {
        setRoleDisplay(project.lookingForItems.map((item, idx) => {
            return (
                <ProjectLookingForItem key={idx} item={item} project={project} user={user}/>
            )
        }))
    }

    useEffect(() => {
        getRoleDisplay();
    },[])

    const loaded = () => {
        return (
            <div className='lookingFor-header'>
                <hr/>
                <h3>Looking For</h3>
                {roleDisplay}
                <hr/>
            </div>
        )
    }

    const loading = () => {
        return
    }

    return roleDisplay.length ? loaded() : loading()
}