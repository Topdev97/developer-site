import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleProject } from '../../hooks/useGetSingleProject'
import { ProjectForm } from '../../components/ProjectForm'

export default() => {
  const {id} = useParams()
  
  const {project,loading,error} = useGetSingleProject(id as string)

  return (
    <>
      {loading && <p>Loading</p>}

      {error && <p>{error}</p>}
      {!loading && <ProjectForm data={project}/>}
    </>
  )
}