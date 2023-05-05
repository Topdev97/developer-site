import { Project } from '@/models/project.model'
import Link from 'next/link'
import React from 'react'


type ProjectDetailProps = {
    project:Project
}
export const ProjectDetail = ({project}:ProjectDetailProps) => {
  
    
    return (
    <div className='flex flex-col gap-5 md:gap-10'>
        <h1>{project.title}</h1>
        <div className='flex flex-col gap-10 lg:flex-row lg:justify-between'>
            <div className='mt-16 project-description max-w-lg'>{project.description}</div>

        <div className='images-container mt-16 lg:mr-20 w-72 h-72 overflow-hidden container max-w-sm'>
        {project.images.map((image)=>{
            return (
                <img key={image.id} src={image.url} alt={`${image.id}`} />

            )
        })}
        </div>
        </div>
        
        <h3>Technologies</h3>
        <div className='labels container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 '>
            {project.labels.map((label)=>{
                return (
                    <div key={label.id} className='flex flex-col items-center'>
                        <img className='h-14 md:h-20' src={label.image} alt="" />
                        <span>{label.title}</span>
                    </div>
                )
            })}
        </div>
        <div className='buttons w-full flex flex-col items-center md:flex-row gap-3 md:gap-6' style={{alignSelf:'start'}}>
            <Link href={project.repository} className='btn--primary w-64'>
                Go to Repo
            </Link>
            <Link href={project.link} className='btn--secondary w-64'>
                Go to App
            </Link>
        </div>

        {/* <img src={project.images[0].url} alt={project.title} /> */}
    </div>
  )
}
