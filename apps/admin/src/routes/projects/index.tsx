import { ListOfProjects } from '../../components/ListOfProjects'
import { Link } from 'react-router-dom'

export const ProjectsPage = () => {
  return (
    <div>
      <h1>ProjectsPage</h1>
      <Link to={`/projects/create`}>Create Project</Link>
      <ListOfProjects/>
    </div>
  )
}
