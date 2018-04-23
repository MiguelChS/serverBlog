import { IPagePost, enumTypePost } from './service.page.interface';

const mock: Array<IPagePost> = [];

for (let i = 0; i < 23; i++) {
    mock.push({
        urlImage: "http://demo.shapedtheme.com/kotha-pro-html/assets/images/post-thumb-1.jpg",
        dateString: "Octubre 13, 2017",
        detalle: {
            categoria: `${i}`,
            descripcion: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...",
            title: "ADVENTURE TO TRAVEL LONELY",
            linkPost: "/post/TestHash001",
            typePost: enumTypePost.PREPOST
        }
    })
}

export async function getListPost(category: string): Promise<Array<IPagePost> | null> {
    return mock;
}