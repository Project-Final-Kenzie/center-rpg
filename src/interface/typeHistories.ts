export interface IhistoriesData{
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    owner?: number;
    title?: string;
    description?: string;
    photo?: string;
    content?: string;
    views? : number;
    comments?: number;
    members?: [];
}
