import { Project } from '@/models/project.model'
import Link from 'next/link'
import React from 'react'
import { ButtonLoader } from '../Buttonloader'

type ProjectItemProps = {

    project:Project
}

export const ProjectItem = ({project}:ProjectItemProps) => {

  const [loading, setLoading] = React.useState(false)
  const handleClick = () => {

    setLoading(true)
  }
  return (
    <div className='flex flex-col items-center gap-4 py-4 px-2'>
        {project.published && <span>Icono</span>}
        <img src={project.images[0].url} alt={project.title} className='h-32 mb-4' />
        <h4>{project.title}</h4>
        <p style={{whiteSpace:'pre-wrap',WebkitBoxOrient:'vertical',WebkitLineClamp:2,overflow:'hidden',display:'-webkit-box',marginBottom:20}}>{project.shortDescription}</p>
        <Link className='btn--primary flex justify-center w-48' href={`/${project.slug}`} onClick={handleClick}>
          {loading ? <ButtonLoader/> : 'Go to Details'}  
        </Link>
    </div>
  )
}
