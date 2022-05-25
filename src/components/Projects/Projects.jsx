import ProjectCollaborators from "../ProjectCollaborators/ProjectCollaborators";
import ProjectLookingFor from "../ProjectLookingFor/ProjectLookingFor";
import { useState,useEffect } from "react"
import { getProject } from "../../utilities/api/projects/projects-api"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ProfileCarousel from "../../components/ProfileCarousel/ProfileCarousel"


export default function Projects({user,setUser}){
    const [project, setProject ] = useState({})
    const params = useParams()
    const projectId = params.id


    const getOneProject  = async() => {
        try{ 
            const response= await getProject(projectId);
            setProject(response.projects)
           
            
            console.log(project)
        }

        catch (error){
            console.log(error)
        }
    }



useEffect(() => {
getOneProject()
}, [])




    const loaded = () =>{ 
        return (
            <main className="project-container">
                <div className="projectPage-container">
                    <div>
                        <h1>{project.projectName}</h1>
                        <img src={project.imageUrl} alt="Project Image" height="255px" width="255px"/> 
                        
                        <div className="projectPage-column-1">
                            <button>Group Message</button>
                        </div>
                    </div> 

                    <div>
                        <div className="projectPage-column-2">
                            <p><strong>Location:</strong></p>
                            <p><strong>Possible Dates:</strong></p>
                            <ul>
                                <li>{project.dateStartEnd} </li>
                            </ul>

                            <p><strong>Description:</strong></p>
                            <p>{project.projectDescription}</p>
                        </div>

                        <div className="projectPage-column-3">
                            <h3><strong>Organizer:</strong><br/>
                            <img src={user.profileImageUrl} alt='profileImg' height="80px" width="80px"/></h3>
                        </div>
                     </div>
                </div>

                <div className="projectPage-container-2">
                    <div className="lookingForSection">
                        <div>
                            <ProjectLookingFor  project={project} user={user} />
                        </div>
                    </div>
        
                    <div className='collaboratorsSection'>
                        <div>
                            <ProjectCollaborators project={project} user={user}/>
                        </div>
                    </div>
                </div>

                {/* <div className="projectPage-container-3">
                    <div className="carouselSection">
                        <div>
                            <ProfileCarousel setUser={setUser} user={user} />
                        </div>
                    </div>

                </div> */}
            </main>
        )
    }

    const loading = () => {
        return
    }
    return project && project._id ? loaded() : loading()


}