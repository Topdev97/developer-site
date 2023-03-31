import React from "react"
import { projectService } from "../api/projects"
import { Project } from "../models/project.model"

export const useGetProjects = () => {
    const [projects, setProjects] = React.useState<Project[]>([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    React.useEffect(()=>{
        const getProjects = async () => {

            try {
                setLoading(true)
                const projects = await projectService.getProjects()
                setProjects(projects)
                    
            } catch (error) {
                setError(`${error}`)
            }
            setLoading(false)
        }
        getProjects()

    },[])

    return {
        projects
    }
}