import React from "react";


const parseDescription = async (markdownUrl:string) => {
    const response = await fetch(markdownUrl)
    const markdown = await response.text()
    return markdown
}

export const useGetSingleService = (id:any) => {
    const [service, setService] = React.useState({})
    React.useEffect(() => {
        const getSingleService = async () => {
            const response = await fetch(`/api/services/${id}`)
            const rawData = await response.json()
            const description = await parseDescription(rawData.description)
            const data = {
                ...rawData,
                description:description
            }
            setService(data)
        }

        getSingleService()
    },[])
    return service

};
