import ProfileCarousel from "../../components/ProfileCarousel/ProfileCarousel"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getUser } from "../../utilities/api/users/users-api";
import ProfilePageUserArea  from '../../components/ProfilePageUserArea/ProfilePageUserArea'
import ProfilePageProjects from '../../components/ProfilePageProjects/ProfilePageProjects'

export default function ProfilePage({ user, setUser }){
    const [profileUser, setProfileUser] = useState(null)
    const params = useParams() 
    const id = params.id

    const findUser = async () => {
        try {
            const foundUser = await getUser(id);
            setProfileUser(foundUser);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        findUser()
    },[id])


    const loaded = () => {
        return(
            <div>
                <div>
                    <hr/>
                </div>

                <main className="profile-pg-container">

                    <ProfilePageUserArea edit={false} profileUser={profileUser} user={user} setUser={setUser}/>
                    
                    <ProfilePageProjects profileUser={profileUser} user={user} setUser={setUser}/>
                    
                    <div className="gallery-header">
                        <h2>{user._id === profileUser._id ? "My " : `${profileUser.firstName}'s `} Gallery</h2>
                        {user._id === profileUser._id && <button>Edit Gallery</button>}
                    </div>

                    <ProfileCarousel profileUser={profileUser} user={user} setUser={setUser}/>
                
                </main>
        </div>
        )
    }

    const loading = () => {
        return (
            <main className='loading-screen'>
                <h2>loading</h2>
            </main>
            )
    }


    return profileUser && profileUser._id ? loaded() : loading()
}