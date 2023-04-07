export interface LabelProject {
    id:        number;
    projectId: number;
    labelId:   number;
    createdAt: string;
}

export interface CreateLabelProjectDto extends Omit<LabelProject,'id' | 'createdAt' >{}
