import Link from 'next/link'
import React from 'react'
import { Project } from '../../models/project.model'
import { Loader } from '../loader'



export const ProjectCard = ({ title, images, shortDescription,slug,techs }: Project) => {
  const [buttonLoading, setButtonLoading] = React.useState(false)
  const mainTechs = techs.slice(0,3)
  return (
    <div className='project-card flex flex-col items-center text-center '>
      <div className='image-container  dark:bg-gray-900 w-full h-80 flex justify-center items-center'>
        <img src={images[0] || '/not-available/2.svg'} alt={title} className='h-full object-cover' />
      </div>
      <h3 className='mb-4'>{title}</h3>
      <p>{shortDescription}</p>
      <div className='project-card__techs my-2'>
        <h4 className='text-gray-600 font-bold'>Technologies</h4>
        <div className="gap-2 grid grid-cols-3 mt-8 mb-3">
            {mainTechs.map((tech) => {

              if(tech.includes('-')){
                const splited = tech.split("-").join(' ')
                return (
                  <div key={tech} className='card--tech-project-detail'>
                  <img className='w-10 h-10' src={`/techs/${tech}.svg`} alt={tech} />
                  <span className='capitalize text-center'>{splited}</span>
                </div>
                )
              } else {

                return (
                  <div key={tech} className='card--tech-project-detail'>
                  <img className='w-10 h-10' src={`/techs/${tech}.svg`} alt={tech} />
                  <span className='capitalize'>{tech}</span>
                </div>
                )

              }


            })}
          </div>
      </div>
      <Link className='btn btn--primary flex justify-center gap-2' onClick={()=> setButtonLoading(true)} href={`/projects/${slug}`}>More details {buttonLoading && <Loader width={4} height={4}/>}</Link>
    </div>
  )
}
