import './ProjectSearchPage.css';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useState, useEffect} from 'react';
import { getAllProjects } from '../../utilities/api/projects/projects-api';

export default function ProjectSearchPage({user, setUser}){
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState({
        usState: '',
        zipCode: '',
        roles: [],
        dates: ["",""]
    })
    const [refreshFilter, setRefreshFilter] = useState(false);

    const haveCommonRoles = (arr1, arr2) => {
        return arr1.some(item => arr2.includes(item));
    }

    const haveCommonDates = (searchDates, projectDates) => {
        const searchStartDate = new Date(searchDates[0])
        const searchEndDate = new Date(searchDates[1])
        const projectStartDate = new Date(projectDates[0])
        const projectEndDate = new Date(projectDates[1])

        if(searchStartDate - projectStartDate <= 0 && searchEndDate - projectStartDate >= 0) return true;
        if(searchStartDate - projectEndDate <= 0 && searchEndDate - projectStartDate >= 0) return true;
        if(searchStartDate - projectStartDate >= 0 && searchEndDate - projectEndDate <= 0) return true;
        return false;
    }

    const getProjects = async () => {
        try {
            const foundProjects = await getAllProjects();
            setProjects(foundProjects.map((project,idx) => {
                if((!filter.usState || filter.usState === project.usState) && (!filter.zipCode || filter.zipCode === project.zipCode) && (!filter.roles.length || haveCommonRoles(filter.roles, project.lookingForItems) && ((!filter.dates[0] && !filter.dates[1]) || haveCommonDates(filter.dates, project.dateStartEnd)))){
                    return (
                        <ProjectItem 
                            key={idx}
                            id={project._id}
                            name={project.projectName}
                            image={project.imageUrl}
                            location={project.usState}
                            description={project.projectDescription}
                            roles={project.lookingForItems}
                            datesRange={project.dateStartEnd}
                            datesMultiple={project.datesMultiple}
                            organizer={project.organizer}
                        />
                    )
                }
            }))
        } catch (err) {
            console.error(err);
        }
    }

    const loaded = () => {
        return (
            <main>
                <SearchBar type='project' user={user} filter={filter} setFilter={setFilter} refreshFilter={refreshFilter} setRefreshFilter={setRefreshFilter}/>
                {projects}
            </main>
        )
    }

    const loading = () => {
        return
    }

    useEffect(() => {
        getProjects();
    },[refreshFilter])

    return projects.length ? loaded() : loading()
}