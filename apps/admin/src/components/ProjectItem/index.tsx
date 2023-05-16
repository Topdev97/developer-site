import React, { useContext, useState } from 'react'
import { projectService } from '../../services/project.service';
import { AuthContext } from '../../context/AuthContext';
import { Project } from '../../models/project.model';
import { Link } from 'react-router-dom';
import { ButtonLoader } from '../ButtonLoader';
import { useGetProjects } from '../ListOfProjects';
import './style.css'
type ProjectItemProps = {
    data:Project,
    setFilteredProjects:any
}

export const ProjectItem = ({data: project,setFilteredProjects}:ProjectItemProps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const {token} = useContext(AuthContext)    
    const handleDelete = async () => {
        setLoading(true);
        try {
          await projectService.deleteProject(token as string, project.id);
          setError(null);
          setFilteredProjects((prev:Project[])=>{
            
            prev.filter((projectFiltered:Project)=>projectFiltered.id !== project.id)
          } )
        } catch (error) {
          setError(`${error}`);
        }
        setLoading(false);
      };
      return (
        <div className="project-list__item" key={project.id}>
          <h6>{project.id}</h6>
          <h6>{project.title}</h6>
          <h6>{project.slug}</h6>
          <h6>{project.shortDescription}</h6>
          <h6>{`${project.published}`}</h6>
          <h6 className=""> <a target='blank' href={project.repository} title={project.repository}> Link</a> </h6>
          <h6 className=""> <a target='blank' href={project.link} title={project.link}> Link</a> </h6>
          
          <h6>{`${project.createdAt}`}</h6>
          <div className="project-list__buttons">
            <Link to={`/projects/edit/${project.id}`}>Edit</Link>
            <button onClick={handleDelete}>{loading ? <ButtonLoader /> : 'Delete'}</button>
          </div>
        </div>
      );
}
