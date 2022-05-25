import { login, logout } from '../../utilities/api/users/users-service'
import Modal from 'react-modal'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './NavBar.css'
import '../../pages/App/App.css'
import { getUnreadMessages } from '../../utilities/api/messages/messages-api'


export default function NavBar({ user, setUser }){
    let subtitle;
    const [ modalIsOpen, setIsOpen ] = useState(false);
    const [ formData, setFormData ] = useState({
        email: '',
        password: ''
    })
    const [ render, setRender ] = useState(false)
    const [unread, setUnread] = useState(null);
    let navigate = useNavigate()

    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false)
    }



    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const user = await login(formData)
            setUser(user)
            navigate(`/profile/${user._id}`)
            closeModal()
        } catch (error) {
            console.log(error)
        }
    }

    const logOut = async (event) => {
        await logout()
        setUser(null)
    }

    const getUnread = async () => {
        try {
            const unreadCount = await getUnreadMessages(user._id);
            setUnread(unreadCount.count);
        } catch (err){
            console.error(err);
        }
    }

    useEffect(() => {
        if(!user) return;
        getUnread();
    },[])

    const loginNav = () => {
        return (
            <div className='navBar' >   
                <div id="navBar-logo">
                    <Link to='/' >
                    <img src='/images/Logo/project_logo.png' alt='ProjectConnect' height="150px"/>
                    </Link>
                </div>

                <div className='user-navbar-buttons'>
                    <div className='userNavButton'>
                        <button onClick={openModal}>Log In</button>
                        <button id="signUpButton">
                            <Link to='/signup'>Sign Up</Link>
                        </button>
                    </div>
                </div>
               
                <Modal className='nav-bar-modal fade-in'
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    // style={customStyles}
                    contentLabel='Log In Modal'
                    >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Log in to your Project Connect account</h2>
                    <form onSubmit={handleSubmit}>
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
                    </form>
                </Modal>

            </div>
        )
    }

    const userNav = () => {
        return (
            <div className='navBar' >   
                <div id="navBar-logo">
                    <Link to='/' ><img src='/images/Logo/project_logo.png' alt='ProjectConnect' height="300px"/></Link>
                </div>

                <div className='user-navbar-links'>
                    <Link to ='/find-projects'>Find Projects</Link>
                    <Link to ='/collaborators'>Find Collaborators</Link>
                    <Link to ='/create-project'>Create Project</Link>
                    <Link to ='/' onClick={(e) => {logOut()}}>Log Out</Link>
                </div>

                <div className='user-navbar-right'> 
                    <Link to ='/inbox'><ion-icon color={unread ? "red" : ""} name='mail-outline'></ion-icon></Link>
                        <Link to ={`/profile/${user._id}`}>
                            <img className='profile-image-navbar' src={user.profileImageUrl} alt='profile-image' />
                    </Link>
                </div>
            </div>
        )
    }

    return user ? userNav() : loginNav()
}