import React, { useState ,FormEventHandler} from 'react';
import {CreateLabelDto, UpdateLabelDto} from '../../models/project.model'
import { labelService } from '../../api/labels';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const LabelForm =  ({data}:any) => {
  
  
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [token,setToken] = useLocalStorage('token',null)

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
        setFormData((prevState:any) => ({
          ...prevState,
          [name]: value
        }));
      };
      
    
      const handleSubmit:FormEventHandler = async (event) => {
        event.preventDefault();
        setLoading(true)
        try {
          if(formData.id){
            console.log(formData);
            
            await labelService.updateLabel(token,formData,formData.id)
          }else {

            await labelService.createLabel(token,formData) 
          }
        } catch (error) {
          setError(`hubo un error ${error} `)
        }
        setLoading(false)
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
        <select name="type" placeholder='Technologies' onInput={handleInput}>
          <option value="tech">Tech</option>
          <option value="other">Otro</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
    </form>
  );
}
