import { FormEventHandler, ChangeEvent, useState, useEffect } from "react";
import { CreateProjectDto, Project } from "../../models/project.model";
import "./style.css";
import { fileService } from "../../services/file.service";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { projectService } from "../../services/project.service";
import { labelProjectService } from "../../services/label-project.service";
import { Label } from "../../models/label.model";
import { labelService } from "../../services/label.service";
import { useInputValue } from "../../hooks/useInputValue";
import { useMultiSelect } from "../../hooks/useMultiSelect";
import { useCheckbox } from "../../hooks/useCheckbox";

type ProjectFormProps = {
  project: Project | null;
};

export const ProjectForm = ({ project }: ProjectFormProps) => {
  // hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [labels, setLabels] = useState<Label[]>([]);
  const [loadingImages, setLoadingImages] = useState(false)
  // end hooks

  //input handler

  const title = useInputValue(project?.title ?? "");
  const description = useInputValue(project?.description ?? "");
  const link = useInputValue(project?.link ?? "");
  const repository = useInputValue(project?.repository ?? "");
  const slug = useInputValue(project?.slug ?? "");
  const shortDescription = useInputValue(project?.shortDescription ?? "");
  const labelsInput = useMultiSelect([]);
  const publishedInput = useCheckbox(true)
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
      const imagesPromises = images.map((url: any) => {
        return imageService.addImage(token, { url, projectId: id });
      });

      const LabelProjectPromises = techs.map((labelId: any) => {
        return labelProjectService.setLabelProject(token, {
          projectId: id,
          labelId,
        });
      });
      await Promise.all(imagesPromises);
      await Promise.all(LabelProjectPromises);

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

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("image", files[i]);

      try {
        const image = await fileService.uploadFile(token, formData);
        setFormData((prevState: any) => ({
          ...prevState,
          images: [...prevState.images, image],
        }));
      } catch (error) {
        setError(`Error uploading files: ${error}`);
      }
    }
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
              <option key={label.id} value={label.id}>{label.title}</option>
            );
          })}
        </select>
      </div>

      <div className="input-group">
        <label>Published:</label>
        <input
          type="checkbox"
          name="published"
          {...publishedInput}          
        />
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
      </div>

      <button type="submit">Submit</button>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
    </form>
  );
};
