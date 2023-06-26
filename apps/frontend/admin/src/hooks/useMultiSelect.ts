import { FormEventHandler, useState } from "react"


export const useMultiSelect = (initialValue:any) => {
    const [value, setValue] = useState(initialValue);
  
    const onInput:FormEventHandler<HTMLSelectElement> = (event) => {
      const { options }:any = event.target
      const selectedValues = [];
  
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedValues.push(options[i].value);
        }
      }
  
      setValue(selectedValues);
    }
  
    return {value, onInput}
  }