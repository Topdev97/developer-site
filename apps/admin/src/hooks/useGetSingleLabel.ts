import React, { useState } from "react";
import { labelService } from "../services/label.service";
import { Label } from "../models/project.model";
export const useGetSingleLabel = (id: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [label, setLabel] = useState<Label | null>(null);

  React.useEffect(() => {
    const getLabels = async () => {
      setLoading(true);
      try {
        const data = await labelService.getLabel(parseInt(id));
        setLabel(data);
      } catch (error) {
        setError(`hubo un error ${error} `);
      }
      setLoading(false);
    };
    getLabels();
  }, []);
  return {
    loading,
    error,
    label,
  };
};
