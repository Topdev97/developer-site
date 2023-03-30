import { config } from "../config"

class FileService{

    async uploadFile(token:string,formData:FormData){

        
        const response = await fetch(`${config.apiUri}/file`,{
            method:"POST",
            headers:{
                'Authorization':`Bearer ${token}`
            },
            body:formData
        })
        const data = await response.json()
        console.log(data);
        
        return data.url
    }

}

export const fileService = new FileService()