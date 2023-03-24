import React, { useState ,FormEventHandler} from 'react';
import {CreateLabelDto, UpdateLabelDto} from '../../models/project.model'

export const LabelForm =  ({data}:{data: CreateLabelDto | UpdateLabelDto | null}) => {
    const [formData, setFormData] = React.useState(()=>{
        if(!data){
          return {
            title: 'javascript',
            type: 'tech'
          }
        } else {
          return data
        }
      });
    
      const handleInput:FormEventHandler<HTMLInputElement | HTMLTextAreaElement |HTMLSelectElement> = (event) => {
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
        Title:
        <input type="text" name="title" value={formData.title} onInput={handleInput} />
      </label>
      <br />
      <label>
        Type:
        <select name="type" placeholder='Technologies' onSelect={handleInput}>
          <option value="tech">Tech</option>
          <option value="business">Business</option>
          <option value="health">Health</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
