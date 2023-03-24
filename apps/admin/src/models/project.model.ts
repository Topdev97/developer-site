export interface Project {
    id:               number;
    link:             string;
    repository:       string;
    title:            string;
    shortDescription: string;
    published:        boolean;
    description:      string;
    createdAt:        Date;
    slug:               string;
    images:           Image[];
    labels:           Label[];
}

export interface Image {
    id:        number;
    projectID: number;
    labelID?:  number;
    createdAt: Date;
    url?:      string;
}

export interface Label {
    id:           number;
    title:        string;
    type:         string;
    createdAt:    Date;
    labelProject: LabelProject;
}

export interface LabelProject {
    id:        number;
    projectID: number;
    labelID:   number;
    createdAt: Date;
}



export interface CreateProjectDto extends Omit<Project,'id' | 'images' | 'label' | 'createdAt'> {}

export interface UpdateProjectDto extends Partial<CreateProjectDto>{}

export interface CreateLabelDto extends Omit<Label,'id' | 'createdAt'>{}

export interface UpdateLabelDto extends Partial<CreateLabelDto>{}

export interface LabelProjectDto extends Omit<LabelProject,'id' | 'createdAt' >{}

export interface CreateImageDto extends Omit<Image,'id' | 'createdAt'>{}

export interface UpdateImageDto extends Partial<CreateImageDto>{}