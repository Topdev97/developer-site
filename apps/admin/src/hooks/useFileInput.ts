import { FormEventHandler, useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { fileService } from "../services/file.service"

export const useFileInput = (fileType: string, initialState:unknown | null = null) => {
    const {token} = useContext(AuthContext)
    const [loadingFile , setloadingFile ] = useState(false)
    const [fileError, setFileError] = useState<string | null>(null)
    const [file, setFile] = useState<any>(initialState)

    const handleFile:FormEventHandler<HTMLElement> = async (event) => {
        event.preventDefault()
        setloadingFile(true)
        const target = event.target as any
        const file = target.files[0] as File
        
        
        try {
            const formData = new FormData()
            formData.append(fileType,file)
            const image = await fileService.uploadFile(token as string,formData)
            setFile(image)
            setFileError(null)
        } catch (error) {
            setFileError(`${error}`)
        }
        setloadingFile(false)

    }

    return {
        loadingFile,
        fileError,
        handleFile,
        file
    }

}