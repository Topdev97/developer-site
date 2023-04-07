
export interface Image {
    id:        number;
    projectId: number;
    createdAt: string;
    url:      string;
}


export interface CreateImageDto extends Omit<Image,'id' | 'createdAt'>{}

export interface UpdateImageDto extends Partial<CreateImageDto>{}
