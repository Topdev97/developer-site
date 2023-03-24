import React from 'react'
import { Labels } from '../../components/Labels'
import { Projects } from '../../components/Projects'
import { useGetProjects } from '../../hooks/useGetProjects'
import { Link } from 'react-router-dom'

export default () => {
  const {projects} =useGetProjects()
  return (
    <div>
      <h1>ProjectsPage</h1>
      <Link to={`/projects/create`}>Create Project</Link>
      <Projects projects={projects} />
    </div>
  )
}
