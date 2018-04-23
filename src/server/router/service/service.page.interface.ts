export interface dataResponse {
    id: string
    data: IPagePost
}

export enum enumTypePost {
    PREPOST,
    POST
}

export interface IPagePost {
    urlImage: string;
    dateString: string;
    detalle: {
        title: string,
        categoria: string,
        descripcion: string,
        linkPost: string,
        typePost: enumTypePost
    };
}