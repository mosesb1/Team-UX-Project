import ProjectCollaborators from "../ProjectCollaborators/ProjectCollaborators";
import { useState,useEffect } from "react"
import { getProject } from "../../utilities/api/projects/projects-api"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function Projects({user,setUser}){
    const [project, setProject ] = useState({})
    const params = useParams()
    const projectId = params.id

// let navigate= useNavigate()

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
                    <h1>{project.projectName}</h1>
                    <ul>
                        <li>{project.dateStartEnd} </li>
                    </ul>
                    {/* <ul>
                        <li>{project.datesMultiple}</li>
                    </ul> */}
                    <p>{project.projectDescription}</p>
                </div>
                <ProjectCollaborators project={project} user={user}/>
            </main>
        )
    }

    const loading = () => {
        return
    }
    return project && project._id ? loaded() : loading()


}