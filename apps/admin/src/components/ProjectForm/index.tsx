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
export const ProjectForm = ({ project }: { project: Project | null }) => {
  // hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [labels, setLabels] = useState<Label[]>([]);
  // end hooks


  //input handler

  const title = useInputValue('')
  const description = useInputValue('')
  const link = useInputValue('')
  const repository = useInputValue('')
  const slug = useInputValue('')
  const shortDescription = useInputValue('')

  // end input handler
  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const {
        link,
        repository,
        title,
        shortDescription,
        slug,
        description,
        published,
      }: CreateProjectDto = formData;
      const { id } = await projectService.addProject(token, {
        link,
        repository,
        title,
        shortDescription,
        slug,
        published,
        description,
      });
      const imagesPromises = formData.images.map((url: any) => {
        return imageService.addImage(token, { url, projectId: id });
      });

      const LabelProjectPromises = formData.techs.map((labelId: any) => {
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

  const handleCheckBox = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as any;
    const { name } = target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: target.checked,
    }));
  };
  const handleSelect: FormEventHandler<HTMLSelectElement> = (event) => {
    const target = event.target as any;
    const { name, value } = target;
    const options = target.options;
    const selectedValues: any = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }
    setFormData((prevState: any) => ({
      ...prevState,
      techs: selectedValues,
    }));
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
  useEffect(()=>{
    const getLabels = async () => {
      setLoading(true)
      try {
        const labels = await labelService.getLabels()
        setLabels(labels)

        setError(null)
      } catch (error) {
        setError(`${error}`)
      }
      setLoading(false)

    }
    getLabels()

  },[])

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Link:</label>
        <input
          type="text"
          name="link"
          {...link}
        />
      </div>

      <div className="input-group">
        <label>Repository:</label>
        <input
          type="text"
          name="repository"
          {...repository}
        />
      </div>

      <div className="input-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          {...title}
/>
      </div>

      <div className="input-group">
        <label>Short Description:</label>
        <input
          type="text"
          name="shortDescription"
          {...shortDescription}
/>
      </div>

      <div className="input-group">
        <label>Labels:</label>
        <select name="labels" onInput={handleSelect} multiple={true}>
          {labels.map((label) => {
            return (
              <option
                defaultValue={
                  formData.Labels
                    ? formData.Labels.find((item: any) => item.id == label.id)
                    : false
                }
                key={label.id}
                value={label.id}
              >
                {label.title}
              </option>
            );
          })}
        </select>
      </div>

      <div className="input-group">
        <label>Published:</label>
        <input
          type="checkbox"
          name="published"
          onChange={handleCheckBox}
          checked={formData.published}
        />
      </div>

      <div className="input-group">
        <label>Description:</label>
        <textarea
          name="description"
          {...description}
        />
      </div>

      <div className="input-group">
        <label>Slug:</label>
        <input
          type="text"
          name="slug"
          {...slug}
        />
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
