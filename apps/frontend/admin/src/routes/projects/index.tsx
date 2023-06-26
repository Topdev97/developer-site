import { ListOfProjects } from '../../components/ListOfProjects'
import { Link } from 'react-router-dom'

export const ProjectsPage = () => {
  return (
    <div className='flex flex-col'>
      <h3 style={{alignSelf:'center'}}>ProjectsPage</h3>
      <ListOfProjects/>
    </div>
  )
}
