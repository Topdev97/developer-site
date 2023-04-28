import { Project } from '@/models/project.model'
import Link from 'next/link'
import React from 'react'

type ProjectItemProps = {

    project:Project
}

export const ProjectItem = ({project}:ProjectItemProps) => {
  return (
    <div className='flex flex-col items-center py-4 px-2'>
        {project.published && <span>Icono</span>}
        <img src={project.images[0].url} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <Link className='btn--primary' href={`/${project.slug}`}>
          Go to Details
        </Link>
    </div>
  )
}
