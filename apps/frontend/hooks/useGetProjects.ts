import React from "react";

export const useGetProjects = () => {
    const [projects, setProjects] = React.useState([])
    React.useEffect(()=>{
        const getProductList =async () => {
            const response = await fetch('/api/projects')
            const data = await response.json()
            setProjects(data)
        }
        getProductList()
    },[])

    return {
        projects
    }
};
