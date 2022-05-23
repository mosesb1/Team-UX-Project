import CreateProjectForm from '../../components/CreateProjectForm/CreateProjectForm.jsx'
import './CreateProject.css'

export default function CreateProject({ user }){

    return(
    
        <main className='CreateProjectForm'>
            <div>
                <hr/>
            </div>

            <CreateProjectForm user={user} />
        </main>
    )
}