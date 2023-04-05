import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectForm } from '../../components/ProjectForm'
import { Project } from '../../models/project.model'
import { projectService } from '../../services/project.service'
export const EditProjectPage = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [project, setProject] = useState<Project | null>(null);

  React.useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const data = await projectService.getProject(parseInt(id as string))
        setProject(data);
      } catch (error) {
        setError(`${error}`);
      }
      setLoading(false);
    };
    getProjects();
  }, []);
  return (
    <>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {!loading && <ProjectForm project={project}/>}
    </>
  )
}