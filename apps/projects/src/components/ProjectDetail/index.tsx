import { Project } from '@/models/project.model'
import Link from 'next/link'
import React from 'react'


type ProjectDetailProps = {
    project:Project
}
export const ProjectDetail = ({project}:ProjectDetailProps) => {
  
    
    return (
    <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        
        <div className='images-container container max-w-sm'>
        {project.images.map((image)=>{
            return (
                <img key={image.id} src={image.url} alt={`${image.id}`} />

            )
        })}
        </div>
        <div className='labels container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
            {project.labels.map((label)=>{
                return (
                    <div key={label.id} className='flex flex-col items-center'>
                        <img className='w-32' src={label.image} alt="" />
                        <span>{label.title}</span>
                    </div>
                )
            })}
        </div>
        <div className='buttons flex flex-col items-center md:flex-row'>
            <Link href={project.repository}>
                Go to Repo
            </Link>
            <Link href={project.link}>
                Go to App
            </Link>
        </div>

        {/* <img src={project.images[0].url} alt={project.title} /> */}
    </div>
  )
}
