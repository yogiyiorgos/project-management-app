import Spinner from './Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../queries/projectQueries'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS)

    if (loading) return < Spinner />
    if (error) return <p>Something went wrong...</p>

    return <>
        {data.projects.data > 0 ? (
            <div className="row">
                {data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        ) : (
            <p>There are no projects.</p>
        )}
    </>

}

export default Projects