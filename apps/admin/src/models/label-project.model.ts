export interface LabelProject {
    id:        number;
    projectId: number;
    labelId:   number;
    order:      number | null;
    createdAt: Date;
}

export interface CreateLabelProjectDto extends Omit<LabelProject,'id' | 'createdAt' >{}
