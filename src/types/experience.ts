export interface Experience { 
    role: string;
    company: string;
    startDate: string;
    endDate: string | null;
    description: string;
    area: string;
    username: string;
    image?: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

export interface CreateExperience{
    role: string;
    company: string;
    startDate: string;
    endDate: string | null;
    description: string;
    area: string;
}

export interface UpdateExperience{
    role?: string;
    company?: string;
    startDate?: string;
    endDate?: string | null;
    description?: string;
    area?: string;
}

export interface UpdateExperienceImage{
    userId: string;
    experienceId: string;
    image: File;
}