import React from "react";
import { Project } from "../models/project.model";
import { config } from "../config";
export const useGetProjects = () => {
  const [projects, setProjects] = React.useState<Project[] | null>(null);
  const [loading, setLoading] = React.useState<Boolean>(false);
  const [error, setError] = React.useState<String | null>(null);

  React.useEffect(() => {
    const getProductList = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${config.basePath}/api/projects`);
        if(response.status == 500){
          throw new Error("Error")
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error:any) {
         console.log(error);
        setLoading(false);
        setError(error.message);
      }
    };
    getProductList();
  }, []);

  return {
    projects,
    loading,
    error,
  };
};
