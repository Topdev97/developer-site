import React, { useContext } from "react";
import { Project } from "../../models/project.model";
import { Link } from "react-router-dom";
import { projectService } from "../../services/project.service";
import { AuthContext } from "../../context/AuthContext";
import "./style.css";
export const ListOfProjects = () => {
  const { token } = useContext(AuthContext);
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
      {projects.map((project) => {
        const handleDelete = async () => {
          setLoading(true);
          try {
            await projectService.deleteProject(token as string, project.id);
            setError(null);
            await getProjects();
          } catch (error) {
            setError(`${error}`);
          }
          setLoading(false);
        };
        return (
          <div className="projects-list__item" key={project.id}>
            <h4>{project.id}</h4>
            <h4>{project.title}</h4>
            <h4>{project.slug}</h4>
            <h4>{project.shortDescription}</h4>
            <h4>{`${project.published}`}</h4>
            <h4 className="cut-text">{project.repository}</h4>
            <h4>{`${project.createdAt}`}</h4>
            <div className="project-list__buttons">
              <Link to={`/projects/edit/${project.id}`}>Edit</Link>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        );
      })}

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};
