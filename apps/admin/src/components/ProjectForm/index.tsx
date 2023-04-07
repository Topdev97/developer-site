import {
  FormEventHandler,
  useState,
  useEffect,
  useContext,
} from "react";
import { Project } from "../../models/project.model";
import "./style.css";
import { fileService } from "../../services/file.service";
import { projectService } from "../../services/project.service";
import { labelProjectService } from "../../services/label-project.service";
import { Label } from "../../models/label.model";
import { labelService } from "../../services/label.service";
import { useInputValue } from "../../hooks/useInputValue";
import { useMultiSelect } from "../../hooks/useMultiSelect";
import { useCheckbox } from "../../hooks/useCheckbox";
import { AuthContext } from "../../context/AuthContext";
import { imageService } from "../../services/image.service";

type ProjectFormProps = {
  project: Project | null;
};

export const ProjectForm = ({ project }: ProjectFormProps) => {
  // hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [labels, setLabels] = useState<Label[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  // end hooks

  const { token } = useContext(AuthContext);

  //input handler

  const title = useInputValue(project?.title ?? "");
  const description = useInputValue(project?.description ?? "");
  const link = useInputValue(project?.link ?? "");
  const repository = useInputValue(project?.repository ?? "");
  const slug = useInputValue(project?.slug ?? "");
  const shortDescription = useInputValue(project?.shortDescription ?? "");
  const labelsInput = useMultiSelect( project?.labels.length !== 0 ? project?.labels : []);
  const publishedInput = useCheckbox(true);
  const [images, setImages] = useState<any>(project?.images.length !== 0 ? project?.images : []);

  // end input handler

  const getLabels = async () => {
    setLoading(true);
    try {
      const labels = await labelService.getLabels();
      setLabels(labels);
      setError(null);
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      if (!project?.id) {
        const { id } = await projectService.addProject(token as string, {
          title: title.value,
          shortDescription: shortDescription.value,
          link: link.value,
          repository: repository.value,
          description: description.value,
          published: publishedInput.checked,
          slug: slug.value,
        });
        const imagesPromises = images.map((image:any) => {
          return imageService.addImage(token as string, { url:image.url, projectId: id });
        });

        const LabelProjectPromises = labelsInput.value.map((labelId: any) => {
          return labelProjectService.addLabel(token as string, {
            projectId: id,
            labelId,
          });
        });
        await Promise.all(imagesPromises);
        await Promise.all(LabelProjectPromises);
      } else {
        await projectService.updateProject(
          token as string,
          project.id,
          {
            title: title.value,
            shortDescription: shortDescription.value,
            link: link.value,
            repository: repository.value,
            description: description.value,
            published: publishedInput.checked,
            slug: slug.value,
          }
        );
        await projectService.deleteLabels(token as string, project.id);
        await projectService.deleteImages(token as string, project.id);
        const imagesPromises = images.map((image:any) => {
          return imageService.addImage(token as string, {
            url:image.url,
            projectId: project.id,
          });
        });

        const LabelProjectPromises = labelsInput.value.map((labelId: any) => {
          return labelProjectService.addLabel(token as string, {
            projectId: project.id,
            labelId,
          });
        });

        await Promise.all(imagesPromises);
        await Promise.all(LabelProjectPromises);
      }

      setError(null);
    } catch (error) {
      setError(`hubo un error ${error}`);
    }
    setLoading(false);
  };

  const handleFile: FormEventHandler<HTMLElement> = async (event) => {
    setLoadingImages(true);
    const target = event.target as any;
    const files = target.files as FileList;
    const uploadedImages:any = [];
  
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("image", files[i]);
  
      try {
        const image = await fileService.uploadFile(token as string, formData);
        
        
        uploadedImages.push(image);
        
      } catch (error) {
        setError(`${error}`);
      }
    }
    
    setImages((prevState:any) => [...prevState, ...uploadedImages]);
    setLoadingImages(false);
  };

  useEffect(() => {
    getLabels();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Link:</label>
        <input type="text" name="link" {...link} />
      </div>

      <div className="input-group">
        <label>Repository:</label>
        <input type="text" name="repository" {...repository} />
      </div>

      <div className="input-group">
        <label>Title:</label>
        <input type="text" name="title" {...title} />
      </div>

      <div className="input-group">
        <label>Short Description:</label>
        <input type="text" name="shortDescription" {...shortDescription} />
      </div>

      <div className="input-group">
        <label>Labels:</label>
        <select name="labels" {...labelsInput} multiple={true}>
          {labels.map((label) => {
            return (
              <option className={project?.labels.some((labelSelected)=>labelSelected.id == label.id)? "selected" : ""} key={label.id} value={label.id}>
                {label.title}
              </option>
            );
          })}
        </select>
      </div>

      <div className="input-group">
        <label>Published:</label>
        <input type="checkbox" name="published" {...publishedInput} />
      </div>

      <div className="input-group">
        <label>Description:</label>
        <textarea name="description" {...description} />
      </div>

      <div className="input-group">
        <label>Slug:</label>
        <input type="text" name="slug" {...slug} />
      </div>
      <div className="input-group">
        <input type="file" name="files" id="" multiple onInput={handleFile} />
        {loadingImages && <p>Loading Images</p>}
        <div className="images">
          { images && images.map((image:any)=>{

            return (
              <img src={image} alt="" />
            )
          })}
        </div>
      </div>

      <button type="submit">Submit</button>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
    </form>
  );
};
