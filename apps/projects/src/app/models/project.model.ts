import { Image } from "./image.model";
import { Label } from "./label.model";
export interface Project {
  id: number;
  link: string;
  repository: string;
  title: string;
  shortDescription: string;
  published: boolean;
  description: string;
  createdAt: string;
  slug: string;
  images: Image[];
  labels: Label[];
}

export interface CreateProjectDto
  extends Omit<Project, "id" | "images" | "labels" | "createdAt"> {}

export interface UpdateProjectDto extends Partial<CreateProjectDto> {}
