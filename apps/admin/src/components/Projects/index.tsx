import React from 'react'
import { Project } from '../../models/project.model'
import { Link } from 'react-router-dom'

export const Projects = ({projects}:{projects:Project[]}) => {
  return (
    <div>
      <h4>id</h4>

      <h4>title</h4>

      <h4>slug</h4>
      {projects.map((project)=>{
        const {id,title,slug} = project
        const handleDelete = () => {
          console.log(id);
          
        }
        return (
          <div>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <h4>{slug}</h4>
            <Link to={`/projects/edit/${slug}`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}
