import { config } from "../config";

class FileService {
  async uploadFile(token: string, formData: FormData):Promise<{url:string}> {
    const response = await fetch(`${config.apiUri}/file`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const data = await response.json();
    if(data.error){
        throw new Error(data.message)
    }
    
    return data.url;
  }
}

export const fileService = new FileService();
