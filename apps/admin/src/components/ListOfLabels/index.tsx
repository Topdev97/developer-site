import React, { useContext, useState } from "react";
import { labelService } from "../../services/label.service";
import { Label } from "../../models/label.model";

import "./style.css";
import { LabelItem } from "../LabelItem";


export const useGetLabels = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
  return {
    loading,
    error,
    labels,
    getLabels
  }
}


export const ListOfLabels = () => {
  const {loading,error,labels} = useGetLabels()
  // End Hooks

  return (
    <div className="labels-list">
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}

      <div className="labels-list__item">
        <h4>Id</h4>
        <h4>Title</h4>
        <h4>Type</h4>
        <h4>Image</h4>
        <h4>Created At</h4>
        <h4>Options</h4>
      </div>
      {labels.map((label) => <LabelItem label={label} /> )}
    </div>
  );
};
