import { FormEventHandler, useState } from "react";

export const useCheckbox = (initialValue: any) => {
  const [checked, setChecked] = useState(initialValue);

  const onChange: FormEventHandler<HTMLInputElement> = (event) => {
    const target: any = event.target;
    setChecked(target.checked);
  };

  return {
    checked,
    onChange,
  };
};
