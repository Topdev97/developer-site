import Link from 'next/link'
import React from 'react'
import { Project } from '../../models/project.model'



export const ProjectCard = ({ title, images, shortDescription,slug }: Project) => {

  return (
    <div className='project-card'>
      <img src={images[0] || '/not-available/2.svg'} alt={title} />
      <h3>{title}</h3>
      <p>{shortDescription}</p>
      <Link className='btn btn--primary' href={`/projects/${slug}`}>More details</Link>
    </div>
  )
}
