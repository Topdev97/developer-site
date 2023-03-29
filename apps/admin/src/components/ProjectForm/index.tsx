import React, { FormEventHandler, ChangeEvent, useState,FormEvent } from "react";
import { CreateProjectDto, UpdateProjectDto } from "../../models/project.model";
import "./style.css";
import { fileService } from "../../api/file";
import { useLocalStorage } from "../../hooks/useLocalStorage";
export const ProjectForm = ({ data }: { data: any }) => {
  const [formData, setFormData] = React.useState(() => {
    if (!data) {
      return {
        link: "",
        repository: "",
        title: "",
        shortDescription: "",
        published: false,
        description: "",
        slug: "",
        techs: [],
        images: [],
      };
    } else {
      return data;
    }
  });
  const [token, setToken] = useLocalStorage("token", null);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const handleCheckBox = (event: any) => {
    const target = event.target as any;
    const { name } = target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: target.checked,
    }));
    

  };
  const handleInput: FormEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (event) => {
    const target = event.target as any;
    const { name, value } = target;

    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
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
    const target = event.target as any;
    const files = target.files as FileList;
    const filesUploaded = [];
    for (let i = 0; i < files.length; i++) {
      filesUploaded.push(fileService.uploadFile(token, files[i]));
    }
    const images = await Promise.all(filesUploaded);
    setFormData((prevState: any) => ({
      ...prevState,
      images,
    }));
  };
  React.useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Link:</label>
        <input
          type="text"
          name="link"
          value={formData.link}
          onInput={handleInput}
        />
      </div>

      <div className="input-group">
        <label>Repository:</label>
        <input
          type="text"
          name="repository"
          value={formData.repository}
          onInput={handleInput}
        />
      </div>

      <div className="input-group">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onInput={handleInput}
        />
      </div>

      <div className="input-group">
        <label>Short Description:</label>
        <input
          type="text"
          name="shortDescription"
          value={formData.shortDescription}
          onInput={handleInput}
        />
      </div>

      <div className="input-group">
        <label>Techs:</label>
        <select name="techs" onInput={handleSelect} multiple={true}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="nodejs">Node.js</option>
        </select>
      </div>

      <div className="input-group">
        <label>Published:</label>
        <input
          type="checkbox"
          name="published"
          onInput={handleCheckBox}
          
        />
      </div>

      <div className="input-group">
        <label>Description:</label>
        <textarea
        
          name="description"
          value={formData.description}
          onInput={handleInput}
        />
      </div>

      <div className="input-group">
        <label>Slug:</label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onInput={handleInput}
        />
      </div>
      <div className="input-group">
        <input type="file" name="files" id="" multiple onInput={handleFile} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
