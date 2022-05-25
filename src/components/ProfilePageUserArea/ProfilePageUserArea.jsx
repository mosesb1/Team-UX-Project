import { Link, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react';
import { updateUser } from '../../utilities/api/users/users-api';
import { artistRoles } from '../../utilities/list-items/list-items';
import Modal from 'react-modal'
import './ProfilePageUserArea.css'

export default function ProfilePageUserArea({ user, profileUser, edit }) {
    let subtitle;
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        _id: profileUser._id,
        websiteUrl: profileUser.websiteUrl,
        aboutMe: profileUser.aboutMe,
        roles: [...profileUser.roles],
        instagramUrl: profileUser.instagramUrl,
        tumblrUrl: profileUser.tumblrUrl,
        pinterestUrl: profileUser.pinterestUrl
    })
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ modalDisplay, setModalDisplay] = useState(null);
    const openModal = (evt) => {
        if(evt.target.textContent === 'Edit Social Links'){
            setModalDisplay('Social Links');
        } else {
            setModalDisplay('Roles');
        }
        setModalIsOpen(true)
    }

    const afterOpenModal = () => {

    }

    const closeModal = (evt) => {
        setModalIsOpen(false)
        setFormData({
            ...formData,
            roles: [...profileUser.roles],
            instagramUrl: profileUser.instagramUrl,
            tumblrUrl: profileUser.tumblrUrl,
            pinterestUrl: profileUser.pinterestUrl
        })
    }

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

    const submitChanges = async () => {
        try {
            const updatedUser = await updateUser(formData);
            navigate(`/profile/${profileUser._id}`);
        } catch (err) {
            console.error(err);
        }
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const updatedUser = await updateUser(formData);
            navigate(`/profile/${profileUser._id}`);
        } catch (err) {
            console.error(err);
        }
    }

    const addRole = (e, aRole) => {
        const arr = formData.roles
        if (e.target.checked) {
            arr.push(aRole)
            setFormData({...formData, roles: arr})
        } else {
            const indexToDelete = arr.indexOf(aRole)
            arr.splice(indexToDelete, 1)
            setFormData({...formData, roles: arr})
        }
    }

    return (
        <div className='ProfilePageUserArea'>

                <div>
                    <h1> {profileUser.firstName} {profileUser.lastName}</h1> 
                </div>
            
                <div className='profile-img-and-links container'>
                    <div>
                        <img src={profileUser.profileImageUrl} alt='profileImg'/>

                        <div className="social-links">
                            
                            <a href={`${profileUser.instagramUrl}`} target="_blank"><img src= "/images/ProfilePg/instagram-logo.png"/> </a>
                            <a href={`${profileUser.pinterestUrl}`} target="_blank"><img src= "/images/ProfilePg/pinterest-logo.png"/> </a>
                            <a href={`${profileUser.tumblrUrl}`} target="_blank"><img src= "/images/ProfilePg/tumblr-logo.png"/> </a>
                            {edit && <button onClick={openModal}>Edit Social Links</button>}
                        
                        </div>

                        {!edit ? 
                            <div className='userURL'>
                                <a href={profileUser.websiteUrl} target="_blank">{profileUser.websiteUrl}</a>
                            </div> :
                            <label>Change Website URL
                                <input type='text' name='websiteUrl' value={formData.websiteUrl} onChange={handleChange}/>
                            </label>
                        }
                
                    </div>

                    <div className='profile-about-and-roles-area'>
                    
                    {!edit ? 
                        <div className='userAbout-text'>{profileUser.aboutMe}</div> :
                        <label>Edit Bio<br/>
                            <textarea type='text' name='aboutMe' wrap='soft' value={formData.aboutMe} onChange={handleChange}/>
                        </label>
                    }

                    
                    
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
                        {edit && <button onClick={openModal}>Edit Roles</button>}

                        {(user._id === profileUser._id && !edit) && <div className='"userAbout-edit'>  

                        <div id="editProfile">
                            <Link to={`/profile/edit/${profileUser._id}`}>Edit My Profile</Link>
                        </div>
                    </div>}

                    </div>

                    

                </div>

                {edit && <button onClick={submitChanges}>Save Changes</button>}


            </div>

            


            <div className='divider'>
                <hr/>
            </div>

            <Modal className='nav-bar-modal fade-in'
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    // style={customStyles}
                    contentLabel="Edit"
                    >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Edit {modalDisplay}</h2>
                    {modalDisplay === 'Roles' ? 
                        <div className='form-columns'>
                            {
                                artistRoles.map((theRole, index) => {
                                    return(
                                        <div className={`form-column-${index % 3 + 1}`} key={index}>
                                            <label>
                                                <input type="checkbox" name="roles" checked={formData.roles.includes(theRole.role)} value={theRole.role} onChange={(e) => addRole(e, theRole.role)}/>
                                            {theRole.role}</label>
                                        </div>
                                    )
                                })
                            }
                            <button onClick={submitChanges}>Save Changes</button>
                        </div> :
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label>Edit Tumblr Link<br/>
                                    <input type='url' name='tumblrUrl' value={formData.tumblrUrl} onChange={handleChange}/>
                                </label>
                                <label>Edit Instagram Link<br/>
                                    <input type='url' name='instagramUrl' value={formData.instagramUrl} onChange={handleChange}/>
                                </label>
                                <label>Edit Pinterest Link<br/>
                                    <input type='url' name='pinterestUrl' value={formData.pinterestUrl} onChange={handleChange}/>
                                </label>
                                <button type='submit'>Save Changes</button>
                            </form>
                        </div>
                    }
                    {/* <form onSubmit={handleSubmit}>
                        <label>Email Address <br/>
                            <input type='email' name='email' onChange={handleChange}/><br/>
                        </label>
                        <br/>
                        <label>Password<br/>
                            <input type='password' name='password' onChange={handleChange}/>
                        </label>
                        <div className='login-form-button'>
                            <button type='submit'>Log In</button>
                            <div>Don't have an account? <Link to='/signup' onClick={closeModal}>Sign Up</Link></div>
                        </div>
                    </form> */}
                </Modal>

        </div>


    )
}