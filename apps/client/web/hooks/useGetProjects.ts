import React from "react";
import {Project} from '../models/project.model'
export const useGetProjects = () => {
    const [projects, setProjects] = React.useState<Project[]>([])
    const [loading, setLoading] = React.useState<Boolean>(false)
    const [error, setError] = React.useState<String | null>(null)

    React.useEffect(()=>{
        const getProductList =async () => {
            setLoading(true)
            setTimeout(async ()=>{

                try {
                    const response = await fetch('/api/projects')
                    const data = await response.json()
                    setProjects(data)
                    setLoading(false)                
                } catch (error) {
                    setError(error as string)
                    setLoading(false)
                    
                }
            },6000)

        }
        getProductList()
    },[])

    return {
        projects,
        loading,
        error
    }
};
