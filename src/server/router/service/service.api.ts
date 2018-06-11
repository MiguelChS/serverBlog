import { IPagePost, enumTypePost } from './service.page.interface';
import { IPostAPI, PostAPI, IPost } from 'posts-escuelita';

const postAPI = PostAPI();

export async function getListPost(category: string): Promise<Array<IPagePost> | null> {
    let listPost = category == "all"
        ? await postAPI.read()
        : await postAPI.getByCategory(category);
    return listPost.map<IPagePost>((item: any) => {
        return {
            dateString: item.dateString ? item.dateString : "",
            detalle: {
                categoria: item.detalle.categoria,
                descripcion: !item.detalle.descripcion ? "" : item.detalle.descripcion.replace(/<[^>]*>/g, "").substr(0, 350),
                linkPost: `/post/${item["_id"]}`,
                title: item.detalle.title,
                typePost: enumTypePost.PREPOST
            },
            urlImage: item.urlImage ? item.urlImage : ""
        }
    })
}

export async function getDataPost(idPost: string): Promise<IPost | null> {
    if (!idPost) {
        return Promise.resolve(null);
    }

    return postAPI.getById(idPost);
}

export async function filterPostbyWords(text: string): Promise<IPagePost[]> {
    let listRespose = await postAPI.byWord(text);
    return listRespose.map<IPagePost>((item: any) => {
        return {
            dateString: item.dateString ? item.dateString : "",
            detalle: {
                categoria: item.detalle.categoria,
                descripcion: !item.detalle.descripcion ? "" : item.detalle.descripcion.replace(/<[^>]*>/g, "").substr(0, 350),
                linkPost: `/post/${item["_id"]}`,
                title: item.detalle.title,
                typePost: enumTypePost.PREPOST
            },
            urlImage: item.urlImage ? item.urlImage : ""
        }
    })
} 
