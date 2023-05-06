import { Project } from '@/models/project.model'
import Markdown from 'markdown-to-jsx'
import Link from 'next/link'
import React from 'react'
Markdown

type ProjectDetailProps = {
    project:Project
}
export const ProjectDetail = ({project}:ProjectDetailProps) => {
  
    
    return (
    <div className='flex flex-col gap-5 md:gap-10'>
        <h1>{project.title}</h1>
        <div className='flex flex-col gap-10 lg:flex-row lg:justify-between'>
            <div className='mt-16 project-description max-w-lg'>
                <Markdown >
                    {project.description}
                </Markdown>
                </div>

        <div style={{alignSelf:'center'}} className='images-container my-8 mt-16 lg:mr-20 w-72 h-72 overflow-y-scroll overflow-x-hidden container max-w-sm'>
        {project.images.map((image)=>{
            return (
                <img key={image.id} src={image.url} alt={`${image.id}`} />

            )
        })}
        </div>
        </div>
        
        <h3 style={{alignSelf:'center'}}>Technologies</h3>
        <div className='labels container mt-4 mb-8 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 md:gap-7 '>
            {project.labels.map((label)=>{
                return (
                    <div key={label.id} className='flex flex-col items-center'>
                        <img className='h-12 md:h-20' src={label.image} alt="" />
                        <span>{label.title}</span>
                    </div>
                )
            })}
        </div>
        <div className='buttons w-full flex flex-col items-center md:flex-row gap-3 md:gap-6' style={{alignSelf:'start'}}>
            <Link href={project.repository} className='btn--primary w-64'>
                Go to Repo
            </Link>
            <Link href={project.link} className='btn--tertiary w-64'>
                Go to App
            </Link>
        </div>

        {/* <img src={project.images[0].url} alt={project.title} /> */}
    </div>
  )
}
