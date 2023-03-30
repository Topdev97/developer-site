import React, { useState } from "react"
import { labelService } from "../api/labels"
import { Label } from "../models/project.model"

export const useGetLabels = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [labels, setLabels] = useState<Label[]>([])

    React.useEffect(()=>{
        const getLabels = async () => {
            
            setLoading(true)
            try {
                
                const data = await labelService.getLabels()
                setLabels(data)
            } catch (error) {
                setError(`hubo un error ${error} `)

            }
            setLoading(false)
        }
        getLabels()
    },[])
    return {
        loading,
        error,
        labels
    }

}