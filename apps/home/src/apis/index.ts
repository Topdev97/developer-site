import { config } from "../config";

export const getProjects = async () => {
  const response = await fetch(`${config.apiUrl}/projects`);

  const data = await response.json();
  return data;
};
