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
            <div className='projectItem-container'>

                <div className='projectItem-1'>
                    
                    <div> <h5>{name}</h5></div>

                    <div>
                        <img src={image} alt="Project Image" height="127.5px" width="127.5px"/>
                    </div>
                    <div>
                        <Link to={`/projects/${id}`}><button>View Project</button></Link>
                    </div>
                </div>

                <div className="projectItem-2">
                    <div>
                        <p><strong>Location:</strong> {location}</p>
                        <p><strong>Description:</strong> </p>
                        <p>{description}</p>
                    </div>
            


            
                
                <div className='projectItem-section-1'>
                    <p><strong>Looking for:</strong></p>
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
        
                      
                            <label><strong>Possible Dates:</strong>
                                <ul>
                                    {datesRange.length ? 
                                        <li key={0}>{datesRange[0]} - {datesRange[1]}</li>
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
                        

                        <div id="organizer">
                            <label><strong>Organizer:</strong>
                                <img src={projectUser.profileImageUrl} alt="Organizer Profile Image" height="65px" width="65px"/>
                            </label>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

    const loading = () => {
        return
    }

    return projectUser && projectUser._id ? loaded() : loading(); 
}