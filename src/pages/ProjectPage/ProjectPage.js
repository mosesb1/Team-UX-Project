
import Projects from "../../components/Projects/Projects"
export default function ProjectPage({user, setUser, profileUser}){
    return (
        <div>
        <div>
            <hr/>
        </div>

       <Projects profileUser={profileUser} user={user} setUser={setUser} />
       </div>
        )
}