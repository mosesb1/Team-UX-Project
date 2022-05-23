import './CollaboratorSearchPage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import CollaboratorItem from '../../components/CollaboratorItem/CollaboratorItem';
import { useState, useEffect } from 'react';
import { getUsers } from '../../utilities/api/users/users-api';

export default function CollaboratorSearchPage({user, setUser}){
    const [collaborators, setCollaborators] = useState([]);
    const [refreshFilter, setRefreshFilter] = useState(false);
    const [filter, setFilter] = useState({
        usState: '',
        zipCode: '',
        roles: [],
        keyword: ''
    });
    
    const haveCommonRoles = (arr1, arr2) => {
        return arr1.some(item => arr2.includes(item));
    }

    const getCollaborators = async () => {
        try {
            const foundUsers = await getUsers();
            setCollaborators(foundUsers.map((currUser, idx) => {
                if((!filter.zipCode || currUser.zipCode === filter.zipCode) && (!filter.usState || currUser.usState === filter.usState) && (!filter.keyword || currUser.keywordTags.includes(filter.keyword)) && (!filter.roles.length || haveCommonRoles(filter.roles, currUser.roles))){
                    return (
                        <div>
                            <CollaboratorItem 
                                key={idx} 
                                id={currUser._id}
                                user={user} 
                                website={currUser.websiteUrl}
                                roles={currUser.roles} 
                                location={currUser.usState} 
                                description={currUser.aboutMe}
                                image={currUser.profileImageUrl}
                                name={`${currUser.firstName} ${currUser.lastName}`}
                                instagram={currUser.instagramUrl}
                                pinterest={currUser.pinterestUrl}
                                tumblr={currUser.tumblrUrl}
                            />
                            <hr/>
                        </div>

                    )
                }
            }));
        } catch (err) {
            console.error(err);
        }
    }


    useEffect(() => {
        getCollaborators();
    },[refreshFilter])

    const loaded = () => {
        return (
        <main>
            <div>
                <hr/>
            </div>

            <div className='collab-header'>
                <h1>Find Collaborators</h1>
             </div>


            <div className='collab-column-1'>
                <SearchBar type="collaborator" user={user} filter={filter} setFilter={setFilter} refreshFilter={refreshFilter} setRefreshFilter={setRefreshFilter}/>
            </div>

            <div className='collab-column-2'>
                <div>
                    {collaborators}
                </div>
            </div>

        </main>
        )
    }

    const loading = () => {
        return
    }

    return collaborators.length ? loaded() : loading();
}