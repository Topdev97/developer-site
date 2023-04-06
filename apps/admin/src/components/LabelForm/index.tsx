import React, { useState, FormEventHandler, useContext } from "react";
import { labelService } from "../../services/label.service";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Label } from "../../models/label.model";
import { AuthContext } from "../../context/AuthContext";
import { useInputValue } from "../../hooks/useInputValue";

type LabelFormProps = {
  label: Label | null;
};

export const LabelForm = ({ label }: LabelFormProps) => {
  //hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //end hooks

  // inputs handler

  const title = useInputValue(label?.title ?? "");
  const type = useInputValue(label?.type ?? "tech");

  // end inputs handler

  const { token } = useContext(AuthContext);

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (label?.id) {
        const changes = {
          title: title.value,
          type: type.value,
        };
        await labelService.updateLabel(token as string, changes, label.id);
      } else {
        await labelService.createLabel(token as string, {
          title: title.value,
          type: type.value,
        });
      }
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label>Title:</label>
        <input type="text" name="title" {...title} />
      </div>
      <div className="input-group">
        <label>Type:</label>
        <select name="type" placeholder="Technologies" {...type}>
          <option value="tech">Tech</option>
          <option value="other">Otro</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
    </form>
  );
};
