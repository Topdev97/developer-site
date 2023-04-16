import React, { useContext, useState } from 'react'
import { projectService } from '../../services/project.service';
import { AuthContext } from '../../context/AuthContext';
import { Project } from '../../models/project.model';
import { Link } from 'react-router-dom';
import { ButtonLoader } from '../ButtonLoader';
import { useGetProjects } from '../ListOfProjects';

type ProjectItemProps = {
    project:Project
}

export const ProjectItem = ({project}:ProjectItemProps) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const {getProjects} = useGetProjects()
    const {token} = useContext(AuthContext)    
    const handleDelete = async () => {
        setLoading(true);
        try {
          await projectService.deleteProject(token as string, project.id);
          setError(null);
          await getProjects();
        } catch (error) {
          setError(`${error}`);
        }
        setLoading(false);
      };
      return (
        <div className="projects-list__item" key={project.id}>
          <h4>{project.id}</h4>
          <h4>{project.title}</h4>
          <h4>{project.slug}</h4>
          <h4>{project.shortDescription}</h4>
          <h4>{`${project.published}`}</h4>
          <h4 className="cut-text">{project.repository}</h4>
          <h4>{`${project.createdAt}`}</h4>
          <div className="project-list__buttons">
            <Link to={`/projects/edit/${project.id}`}>Edit</Link>
            <button onClick={handleDelete}>{loading ? <ButtonLoader /> : 'Delete'}</button>
          </div>
        </div>
      );
}
