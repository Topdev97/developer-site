import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { labelService } from "../../services/label.service";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Label } from "../../models/label.model";

import "./style.css";
import { AuthContext } from "../../context/AuthContext";
export const ListOfLabels = () => {

  // Hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // End Hooks
  const { token } = useContext(AuthContext);

  const [labels, setLabels] = useState<Label[]>([]);
  const getLabels = async () => {
    setLoading(true);
    try {
      const data = await labelService.getLabels();
      setLabels(data);
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };
  React.useEffect(() => {
    getLabels();
  }, []);

  return (
    <div className="labels-list">
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}

      <div className="labels-list__item">
        <h4>Id</h4>
        <h4>Title</h4>
        <h4>Type</h4>
        <h4>Created At</h4>
        <h4>Options</h4>
      </div>
      {labels.map((label) => {
        const handleDelete = async () => {
          setLoading(true);
          try {
            await labelService.deleteLabel(token as string,label.id);
            
            await getLabels()
            setError(null)
          } catch (error) {
            setError(`${error}`);
          }
          setLoading(false);
        };
        return (
          <div className="labels-list__item" key={label.id}>
            <h4>{label.id}</h4>
            <h4>{label.title}</h4>
            <h4>{label.type}</h4>
            <h4>{`${label.createdAt}`}</h4>
            <div className="buttons">
              <button onClick={handleDelete}>Delete</button>
              <Link to={`/labels/edit/${label.id}`}>Edit</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
