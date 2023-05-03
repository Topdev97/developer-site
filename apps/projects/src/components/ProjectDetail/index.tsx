import { Project } from '@/models/project.model'
import Link from 'next/link'
import React from 'react'


type ProjectDetailProps = {
    project:Project
}
export const ProjectDetail = ({project}:ProjectDetailProps) => {
  
    
    return (
    <div className='flex flex-col items-center gap-5 md:gap-10'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        
        <div className='images-container container max-w-sm'>
        {project.images.map((image)=>{
            return (
                <img key={image.id} src={image.url} alt={`${image.id}`} />

            )
        })}
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
        <div className='buttons flex flex-col items-center md:flex-row gap-3 md:gap-6' style={{alignSelf:'start'}}>
            <Link href={project.repository} className='btn--primary'>
                Go to Repo
            </Link>
            <Link href={project.link} className='btn--secondary'>
                Go to App
            </Link>
        </div>

        {/* <img src={project.images[0].url} alt={project.title} /> */}
    </div>
  )
}
