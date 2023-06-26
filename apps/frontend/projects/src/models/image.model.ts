
export interface Image {
    id:        number;
    projectId: number;
    createdAt: Date;
    url:      string;
}


export interface CreateImageDto extends Omit<Image,'id' | 'createdAt'>{}

export interface UpdateImageDto extends Partial<CreateImageDto>{}