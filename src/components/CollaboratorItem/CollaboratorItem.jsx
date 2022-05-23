import './CollaboratorItem.css';
import { Link } from 'react-router-dom';

export default function CollaboratorItem({user,id,website,roles,location,image,name,instagram, pinterest,tumblr, description}){
    return (
        <div className='collaborators'>
                <div className='collab-name'>
                    <h5>{name}</h5>
                </div>


                <div className='collab-col-1'>
                    <div className='collab-img'>
                        <img src={image} alt="Profile image" width="127.5" height="127.5" />
                    </div>

                    <div className='collab-buttons'>
                        <Link to={`/profile/${id}`}><button>View Profile</button></Link>
                    </div>
                </div>



                <div className='collab-col-2'>
                    <ul>
                        {
                            roles.map((role,idx) => {
                                return (
                                    <li key={idx}>
                                        {role}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <a href={website}>View Website</a>
                </div>
                
            
            <div className='collab-col-3'>
                <p>Location: {location}</p>
                
                <div className='collab-description'>
                    <p>{description}</p>
                </div>

                <div>
                    {instagram && <a href={instagram}>insta</a>}
                    {pinterest && <a href={pinterest}>pinterest</a>}
                    {tumblr && <a href={tumblr}>tumblr</a>}
                </div>
            </div>
        </div>
    )
}