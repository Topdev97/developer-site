import React from 'react'
import { Project } from '../../models/project.model'
import { Link } from 'react-router-dom'
import { projectService } from '../../api/projects'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const Projects = ({projects}:{projects:Project[]}) => {
  const [token] = useLocalStorage('token',null)
  return (
    <div>
      <h4>id</h4>

      <h4>title</h4>

      <h4>slug</h4>
      {projects.map((project)=>{
        const {id,title,slug} = project
        const handleDelete = async () => {
          await projectService.deleteProject(token,id)
          
        }
        return (
          <div key={id}>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <h4>{slug}</h4>
            <Link to={`/projects/edit/${id}`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

