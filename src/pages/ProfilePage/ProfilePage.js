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
    },[])


    const loaded = () => {
        return(
            <main className="profile-pg-container">

                <ProfilePageUserArea profileUser={profileUser} user={user} setUser={setUser}/>
                
                <ProfilePageProjects profileUser={profileUser} user={user} setUser={setUser}/>
                
                <div className="gallery-header">
                    <h2>My Gallery</h2>
                    <button>Edit Gallery</button>
                </div>

                <ProfileCarousel user={user} setUser={setUser}/>
                

        

            </main>
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