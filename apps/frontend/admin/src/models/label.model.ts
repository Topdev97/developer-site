import { LabelProject } from "./label-project.model";
export interface Label {
    id:           number;
    title:        string;
    type:         string;
    image:          string;
    createdAt:    Date;
}

export interface CreateLabelDto extends Omit<Label,'id' | 'createdAt' | 'labelProject'>{}

export interface UpdateLabelDto extends Partial<CreateLabelDto>{}
