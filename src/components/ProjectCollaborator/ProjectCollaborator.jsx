import './ProjectCollaborator.css';
import {useState, useEffect} from 'react';
import { getUser } from '../../utilities/api/users/users-api';

export default function ProjectCollaborator({collaborator, user}){
    const [userInfo, setUserInfo] = useState(null);

    const setUser = async () => {
        try {
            const foundUser = await getUser(collaborator.userId);
            setUserInfo(foundUser);
        } catch (err){
            console.error(err);
        }
    }

    useEffect(() => {
        setUser();
    },[])

    const loaded = () => {
        return (
            <div>
                <p>{`${userInfo.firstName} ${userInfo.lastName}`}</p>
                <img src={userInfo.profileImageUrl} alt='Collaborator profile image'/>
                <p>Dates Available: </p>
                <ul>
                    {collaborator.datesAvailable.map((date, idx) => {
                        return (
                            <li key={idx}>
                                {date}
                            </li>
                        )
                    })}
                </ul>
                <p>{collaborator.role}</p>
                {user._id !== userInfo._id && <button>Message</button>}
            </div>
        )
    }

    const loading = () => {
        return
    }

    return userInfo ? loaded() : loading()
}