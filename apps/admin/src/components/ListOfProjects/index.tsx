import React, { useContext } from "react";
import { Project } from "../../models/project.model";
import { projectService } from "../../services/project.service";
import "./style.css";
import { ProjectItem } from "../ProjectItem";

export const useGetProjects = () => {
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const getProjects = async () => {
    setLoading(true);
    try {
      const projects = await projectService.getProjects();
      setProjects(projects);
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    getProjects
  }
}

export const ListOfProjects = () => {
  const {projects,loading,error} = useGetProjects()
  return (
    <>
      <div className="projects-list__item">
        <h4>Id</h4>
        <h4>Title</h4>
        <h4>Slug</h4>
        <h4>Short Description</h4>
        <h4>Published</h4>
        <h4>Repository</h4>
        <h4>Created At</h4>
        <h4>Options</h4>
      </div>
      {projects.map((project) => <ProjectItem project={project}/>)}

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};
