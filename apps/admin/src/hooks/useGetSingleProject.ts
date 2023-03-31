import React, { useState } from "react";

import { Project } from "../models/project.model";
import { projectService } from "../api/projects";
export const useGetSingleProject = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [project, setProject] = useState<Project | null>(null);

  React.useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const data = await projectService.getProject(parseInt(id))
        setProject(data);
      } catch (error) {
        setError(`hubo un error ${error} `);
      }
      setLoading(false);
    };
    getProjects();
  }, []);
  return {
    loading,
    error,
    project,
  };
};