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
            <main>
                <div>
                    <div>
                    <h1>{project.projectName}</h1>
                  </div>  
                    
                    <div className="d-flex justify-content-center">
                    <h3>organizer: <br/>
                         <img src={user.profileImageUrl} alt='profileImg'/></h3>
                    </div>



                    <ul>
                        <li>{project.dateStartEnd} </li>
                    </ul>
                
                    <p>{project.projectDescription}</p>
                </div>


            
                <ProjectLookingFor  project={project} user={user} />

     
         
               
                <ProjectCollaborators project={project} user={user}/>

                <ProfileCarousel setUser={setUser} user={user} />
            </main>
        )
    }

    const loading = () => {
        return
    }
    return project && project._id ? loaded() : loading()


}