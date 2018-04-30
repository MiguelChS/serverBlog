import { IPagePost, enumTypePost } from './service.page.interface';
import { IPostAPI, PostAPI } from 'posts-escuelita';

const mock: Array<IPagePost> = [];
const postAPI = PostAPI();

for (let i = 0; i < 23; i++) {
    postAPI.create({
        urlImage: "http://demo.shapedtheme.com/kotha-pro-html/assets/images/post-thumb-1.jpg",
        dateString: "Octubre 13, 2017",
        detalle: {
            categoria: `${i}`,
            descripcion: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua...",
            title: "ADVENTURE TO TRAVEL LONELY",
            linkPost: "/post/TestHash001",
            //typePost: enumTypePost.PREPOST
        }
    })
}

export async function getListPost(category: string): Promise<Array<any> | null> {
    return postAPI.read();
}

const mockbyID: dataResponse = {
    id: "TestHash001",
    data: {
        urlImage: "/images/post.jpeg",
        dateString: "Octubre 13, 2017",
        detalle: {
            categoria: "Travel",
            descripcion: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirtempor    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero accusam et    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elised    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sdiam    voluptua. At vero eos et accusam.</p><img class="post-img img-responsive text-center" src="http://demo.shapedtheme.com/kotha-pro-html/assets/images/magazine-1.jpg" alt=""><h4 class="text-center">diam nonumy eirmod</h4><img class="post-img img-responsive text-center" src="http://demo.shapedtheme.com/kotha-pro-html/assets/images/gl-10.jpg" alt=""><h4 class="text-center">Justo duo dolores et</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed    tevidulabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et    justo duo dolores rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem    ipsum dolor sit am Lorem ipsum dolor sitconsetetur sadipscing elitr, sed diam nonumy    eirmod tempor invidunt ut labore et dolore maliquyam erat, sed diam voluptua.</p><h3 class="text-brand">At vero accusam et    justo duo dolores et ea rebum.</h3><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirtempor    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Stet clita kasd gubergren, no sea    takimata sanctusest    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elised    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sdiam    voluptua. At vero eos et accusam.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirtempor    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero accusam et    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elised    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sdiam    voluptua. At vero eos et accusam.</p><ol>    <li>dolor sit amet</li>    <li>consetetur sadipscing</li>    <li>Lorem ipsum</li>    <li>sed diam voluptua</li></ol><p>Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirtempor    invidunt ut labore et dolore magna aliquyam erat, . At vero accusam et    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest    Lorem ipsum dolor sit amet. dolor sit amet, consetetur sadipscing elised    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sdiam    voluptua. At vero eos et accusam.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirtempor    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero accusam et    justo duo dolores et ea rebum. sanctusest    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elised    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sdiam    voluptua. At vero eos et accusam.</p><del class="text-muted ">Lorem ipsum dolor sit amet, consetetur sadipscing elised    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</del><p>Lorem ipsum dolor sit amet, <abbr title="ShapedTheme">ST</abbr> consetetur sadipscing elitr, sed diam    nonumy eirtempor    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero accusam et    justo duo dolores et ea rebum. Stet clita kasd gubergren,    voluptua. At vero eos et accusam.</p><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirtempor    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero accusam et    justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctusest    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elised    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sdiam    voluptua. At vero eos et accusam.</p>',
            title: "ADVENTURE TO TRAVEL LONELY",
            linkPost: "#",
            typePost: enumTypePost.POST
        }
    }
}

export async function getDataPost(idPost: string): Promise<dataResponse | null> {
    if (idPost == mockbyID.id) {
        return mockbyID;
    } else {
        return null;
    }
}

export async function filterPostbyWords(text: string): Promise<Array<any>>{
    return mock.slice(0,3);
}