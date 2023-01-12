import React from "react";

export const useGetSingleProject = (slug:any) => {
    const [project, setProject] = React.useState({})
    React.useEffect(() => {
        
        const getSingleProject = async () => {
        
            const response = await fetch(`/api/projects/${slug}`)
            const data = await response.json()
            
            setProject(data)
        }

        getSingleProject()
    },[])
    return project

};
