import { Link, useNavigate } from 'react-router-dom'
import './ProfilePageUserArea.css'

export default function ProfilePageUserArea({ user, profileUser }) {

    return (
        <div className='ProfilePageUserArea'>

                <div>
                    <h1> {profileUser.firstName} {profileUser.lastName}</h1> 
                </div>
            
                <div className='profile-img-and-links container'>
                    <div>
                        <img src={profileUser.profileImageUrl} alt='profileImg'/>

                        <div className="social-links">
                            <a href={profileUser.instagramUrl} target="_blank"><img src= "/images/ProfilePg/instagram-logo.png"/> </a>
                            <a href={profileUser.pinterestUrl} target="_blank"><img src= "/images/ProfilePg/pinterest-logo.png"/> </a>
                            <a href={profileUser.tumblrUrl} target="_blank"><img src= "/images/ProfilePg/tumblr-logo.png"/> </a>
                        </div>

                        <div className='userURL'>
                            <a href={profileUser.websiteUrl} target="_blank">{profileUser.websiteUrl}</a>
                        </div>
                
                    </div>

                    <div className='profile-about-and-roles-area'>
                    
                    <div className='userAbout-text'>{profileUser.aboutMe}</div>
                    
                    <div className='userAbout-roles'>
                        <ul>
                            {
                                profileUser.roles.map((role, idx) => {
                                    return (
                                        <li key={idx}>{role}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    {/* <div className='"userAbout-edit'>  
                        <Link to='/'>Edit My Profile</Link>
                    </div> */}

                </div>


            </div>

            


            <div className='divider'>
                <hr/>
            </div>

        </div>


    )
}