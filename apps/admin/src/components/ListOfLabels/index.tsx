import React, { useContext, useEffect, useState } from "react";
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
  const {loading,error,labels,getLabels} = useGetLabels()
  const [filteredLabels, setFilteredLabels] = useState<Label[]>(labels)
  // End Hooks
  useEffect(() => {
    setFilteredLabels(labels)
  
  }, [labels])
  

  return (
    <div className="labels-list">
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}

      <div className="labels-list__item">
        <h5>Id</h5>
        <h5>Title</h5>
        <h5>Type</h5>
        <h5>Image</h5>
        <h5>Created At</h5>
        <h5>Options</h5>
      </div>
      {filteredLabels.map((label) => <LabelItem key={label.id} label={label} getLabels={getLabels} filteredLabels={filteredLabels} setFilteredLabels={setFilteredLabels} /> )}
    </div>
  );
};
