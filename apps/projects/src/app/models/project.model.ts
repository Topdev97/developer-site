export interface Project {
  id:               number;
  link:             string;
  slug:             string;
  repository:       string;
  title:            string;
  shortDescription: string;
  published:        boolean;
  description:      string;
  createdAt:        Date | string;
  images:           Image[];
  labels:           Label[];
}

export interface Image {
  id:        number;
  projectId: number;
  labelId?:  number;
  createdAt: Date | string;
  url?:      string;
}

export interface Label {
  id:           number;
  title:        string;
  type:         string;
  createdAt:    Date | string;
  LabelProject: LabelProject;
}

export interface LabelProject {
  id:        number;
  projectId: number;
  labelId:   number;
  createdAt: Date | string;
}


