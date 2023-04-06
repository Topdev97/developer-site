import React, { useState } from "react";
import { LabelForm } from "../../components/LabelForm";
import { useParams } from "react-router-dom";
import { Label } from "../../models/label.model";
import { labelService } from "../../services/label.service";

export const EditLabelPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [label, setLabel] = useState<Label | null>(null);

  const getLabel = async () => {
    setLoading(true);
    try {
      const data = await labelService.getLabel(parseInt(id as string));
      setLabel(data);
      setError(null)
    } catch (error) {
      setError(`${error}`);
    }
    setLoading(false);
  };
  React.useEffect(() => {
    getLabel();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  } else if (error) {
    return <p>{error}</p>;
  } else {
    
    return <LabelForm label={label} />;
  }
};
