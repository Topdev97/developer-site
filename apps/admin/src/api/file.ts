import { config } from "../config"

class FileService{

    async uploadFile(token:string,file:File){

        const formData = new FormData()
        formData.append(file.name,file)
        const response = await fetch(`${config.apiUri}/file`,{
            method:"POST",
            body:formData
        })
        const data = await response.json()
        console.log(data);
        
        return data.url
    }

}

export const fileService = new FileService()