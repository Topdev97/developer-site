import React, { FormEventHandler } from "react";
import { CreateProjectDto,UpdateProjectDto } from "../../models/project.model";

export const ProjectForm = ({data}:{data: CreateProjectDto | UpdateProjectDto | null}) => {
  const [formData, setFormData] = React.useState(()=>{
    if(!data){
      return {
        link: "",
        repository: "",
        title: "",
        shortDescription: "",
        published: false,
        description: "",
        slug: "",
      }
    } else {
      return data
    }
  });

  const handleInput:FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
    const target = event.target as any
    const { name, value } = target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit:FormEventHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Link:
        <input
          type="text"
          name="link"
          value={formData.link}
          onInput={handleInput}
        />
      </label>
      <br />
      <label>
        Repository:
        <input
          type="text"
          name="repository"
          value={formData.repository}
          onInput={handleInput}
        />
      </label>
      <br />
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onInput={handleInput}
        />
      </label>
      <br />
      <label>
        Short Description:
        <input
          type="text"
          name="shortDescription"
          value={formData.shortDescription}
          onInput={handleInput}
        />
      </label>
      <br />
      <label>
        Published:
        <input
          type="checkbox"
          name="published"
          checked={formData.published}
          onInput={handleInput}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onInput={handleInput}
        />
      </label>
      <br />
      <label>
        Slug:
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onInput={handleInput}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
