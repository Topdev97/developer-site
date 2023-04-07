import { FormEventHandler, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { fileService } from "../services/file.service";

export const useMultiFile = (fileType: string,initialState:unknown[] | null = null) => {
  const { token } = useContext(AuthContext);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [errorFiles, setErrorFiles] = useState<string | null>(null);
  const [files, setFiles] = useState<unknown[] | null>(initialState);

  const handleFiles: FormEventHandler<HTMLElement> = async (event) => {
    setLoadingFiles(true);
    const target = event.target as any;
    const files = target.files as FileList;
    const uploadedFiles: any = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append(fileType, files[i]);

      try {
        const image = await fileService.uploadFile(token as string, formData);

        uploadedFiles.push(image);
      } catch (error) {
        setErrorFiles(`${error}`);
      }
    }

    setFiles((prevState: any) => [...prevState, ...uploadedFiles]);
    setLoadingFiles(false);
  };
  return {
    loadingFiles,
    errorFiles,
    files,
    handleFiles
  }
};
