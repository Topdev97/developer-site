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
      <div className="project-list__headers">
        <h5>Id</h5>
        <h5>Title</h5>
        <h5>Slug</h5>
        <h5>Short Description</h5>
        <h5>Published</h5>
        <h5>Repository</h5>
        <h5>App Link</h5>
        <h5>Created At</h5>
        <h5>Options</h5>
      </div>
      <div className="grid gap-2 mt-3">

        {projects.map((project) => <ProjectItem project={project}/>)}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};
