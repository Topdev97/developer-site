import React from "react";
import { Project } from "../../models/project.model";
import { Link } from "react-router-dom";
import { projectService } from "../../services/project.service";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const ListOfProjects = () => {
  const [token] = useLocalStorage("token", null);
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  React.useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const projects = await projectService.getProjects();
        setProjects(projects);
      } catch (error) {
        setError(`${error}`);
      }
      setLoading(false);
    };
    getProjects();
  }, []);
  return (
    <div>
      <h4>id</h4>

      <h4>title</h4>

      <h4>slug</h4>
      {loading && <p>Loading...</p>}
      {projects.map((project) => {
        const { id, title, slug } = project;
        const handleDelete = async () => {
          await projectService.deleteProject(token, id);
        };
        return (
          <div key={id}>
            <h4>{id}</h4>
            <h4>{title}</h4>
            <h4>{slug}</h4>
            <Link to={`/projects/edit/${id}`}>Edit</Link>
            <button onClick={handleDelete}>Delete</button>
          </div>
        );
      })}

      {error && <p>{error}</p>}
    </div>
  );
};
