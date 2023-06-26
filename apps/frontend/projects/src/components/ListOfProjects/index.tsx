import { Project } from '@/models/project.model'
import { projectService } from '@/services/project.service'
import React, { useEffect, useState } from 'react'
import { ProjectItem } from '../ProjectItem'




const useGetProjects = () => {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = useState<string | null>(null)
    const [projects, setProjects] = useState<Project[]>([])

    const getProjects = async () => {
        setLoading(true)
        try {
            const projects = await projectService.getProjects()
            setProjects(projects)
            setError(null)
        } catch (error) {
            setError(`${error}`)
        }
        setLoading(false)

    }
    useEffect(()=>{
        getProjects()
        
    },[])
    return {
        loading,
        error,
        projects
    }
}   

export const ListOfProjects = () => {
    const {loading,error,projects} = useGetProjects()

    return (
    <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-start'>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        { !loading && projects.map(project=> <ProjectItem key={project.id} project={project}/>) }
    </div>
  )
}
