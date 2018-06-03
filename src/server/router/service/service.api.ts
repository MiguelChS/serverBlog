import { IPagePost, enumTypePost } from './service.page.interface';
import { IPostAPI, PostAPI, IPost } from 'posts-escuelita';

const postAPI = PostAPI();

export async function getListPost(category: string): Promise<Array<any> | null> {
    return postAPI.getByCategory(category);
}

export async function getDataPost(idPost: string): Promise<IPost | null> {
    if (!idPost) {
        return Promise.resolve(null);
    }

    return postAPI.getById(idPost);
}

export async function filterPostbyWords(text: string): Promise<IPost[]>{	
        return postAPI.byWord(text);
 } 
