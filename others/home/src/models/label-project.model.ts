export interface LabelProject {
    id:        number;
    projectId: number;
    labelId:   number;
    createdAt: Date;
}

export interface CreateLabelProjectDto extends Omit<LabelProject,'id' | 'createdAt' >{}
