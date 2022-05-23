
import Projects from "../../components/Projects/Projects"
export default function ProjectPage({user, setUser, profileUser}){
    return (
       <Projects profileUser={profileUser} user={user} setUser={setUser} />
        )
}