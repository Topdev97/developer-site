import React from "react";
import { Project } from "../models/project.model";
export const useGetSingleProject = (slug:any) => {
    const [project, setProject] = React.useState<Project | null>(null) 
    const [loading, setLoading] = React.useState<Boolean | null>(null)
    const [error, setError]:any = React.useState<Boolean | null>(null)
    React.useEffect(() => {
        
        const getSingleProject = async () => {
            setLoading(true)
            if(slug){
                try {
                    const response = await fetch(`/api/projects/${slug}`)
                    if(response.status == 500){
                        throw new Error("Error")
                    }
                    const data = await response.json()
                    setProject(data)
                    setLoading(false)           
                } catch (error) {
                    console.log(`[projects-error]: ${error}`);
                    setError(error)
                }
            }
        }

        getSingleProject()
    },[slug])
    return {
        project,
        error,
        loading
    }

};
