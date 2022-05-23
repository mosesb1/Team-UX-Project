import './ProjectItem.css';
import { useState, useEffect } from 'react';
import { getUser } from '../../utilities/api/users/users-api';
import { Link } from 'react-router-dom';

export default function ProjectItem({name, image, id, location, description, roles, datesRange, datesMultiple, organizer}){
    const [projectUser, setProjectUser] = useState(null)

    const findUser = async () => {
        try {
            const foundUser = await getUser(organizer);
            setProjectUser(foundUser)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        findUser()
    },[])
    const loaded = () => {
        return (
            <div>
                <h5>{name}</h5>
                <div>
                    <img src={image} alt="Project Image" />
                    <div>
                        <p>Location: {location}</p>
                        <p>Description: </p>
                        <p>{description}</p>
                    </div>
                </div>
                <div>
                    <Link to={`/projects/${id}`}><button>View Project</button></Link>
                    <label>Looking For
                        <ul>
                            {
                                roles.map((role, idx) => {
                                    return (
                                        <li key={idx}>
                                            {role}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </label>
                    <label>Possible Dates
                        <ul>
                            {datesRange.length ? 
                                <li key={0}>{datesRange[0]}-{datesRange[1]}</li>
                            :
                                datesMultiple.map((date, idx) => {
                                    return (
                                        <li key={idx}>
                                            {date}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </label>
                    <label>Organizer
                        <img src={projectUser.profileImageUrl} alt="Organizer Profile Image" />
                    </label>
                </div>
            </div>
        )
    }

    const loading = () => {
        return
    }

    return projectUser && projectUser._id ? loaded() : loading(); 
}