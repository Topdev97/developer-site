export interface Project {
  id:               number;
  link:             string;
  repository:       string;
  title:            string;
  shortDescription: string;
  published:        boolean;
  description:      string;
  createdAt:        string;
  slug:             string;
  images:           Image[];
  labels:           Label[];
}

export interface Image {
  id:  number;
  url: string;
}

export interface Label {
  id:           number;
  title:        string;
  image:        string;
  labelProject: LabelProject;
}

export interface LabelProject {
  order:     null;
  createdAt: Date;
}

export interface CreateProjectDto
  extends Omit<Project, "id" | "images" | "labels" | "createdAt"> {}

export interface UpdateProjectDto extends Partial<CreateProjectDto> {}
