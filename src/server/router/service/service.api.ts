import { IPagePost, enumTypePost } from './service.page.interface';
import { IPostAPI, PostAPI, IPost } from 'posts-escuelita';

const mock: Array<IPagePost> = [];
const postAPI = PostAPI();

for (let i = 0; i < 23; i++) {
    postAPI.create({
        urlImage: "http://www.venusgo.com/sites/default/files/gspx_me-puedo-apuntar-con-vosotros.gif",
        dateString: "Octubre 13, 2017",
        detalle: {
            categoria: `ENTRETENIMIENTO`,
            descripcion: `
            Ocurren algunas situaciones con parejas que llevan ya muchos años de relación como por ejemplo: se encuentran solos en la casa, los niños se han ido de paseo por esa noche con sus abuelos o tíos, han cenado rico, miran una película y de pronto... se corta la luz.

            Entonces tu hombre se levanta a ver qué diablos ocurre con la luz y tú sales al balcón y te das cuenta que problema es en toda la cuadra así que sea lo que sea tendrán que esperar a que la empresa que les brinda el servicio se ocupe de solucionarlo. 
            En un destello de luz se te ocurre hacer algo que hace mucho, muchísimo no haces y te acercas a él, lentamente... y le dices: "mi vida ya que no hay luz, ¿qué podríamos hacer?" y él te dice: aprovechemos para dormirnos más temprano.
            
            Ahí es cuando reparas en que no solo se cortó la luz, sino que se cortó la CHISPA!!! Y si al principio te dormías después de hacer el amor, ahora te duermes antes, o durante que es peor....
            La rutina, los años, la costumbre no debe nunca cortar el deseo. Uno es quien debe mantener la llama encendida. Conocer las fantasías de cada uno, y jugar con eso....
            Una de las fantasías favoritas de ambos sexos pero que en muchos casos callan es la de concretar un trío sexual. Tener un invitado/a en nuestra cama.
            
            La fantasía de hacer un trío es muy frecuente en los hombres y mujeres de hoy en día. La curiosidad nos impulsa generalmente a probar cosas nuevas y esto no es un pecado o una perversión. Si tu pareja te propone hacerlo, tienes que tener varios puntos a evaluar:
            `,
            title: `Escuelita de Sexo #ClaSEX N°${i} Tips para tu primer trio`,
            linkPost: "/post/TestHash001",
            //typePost: enumTypePost.PREPOST
        }
    })
}

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
        return postAPI.read()
        .then(posts => {
            return [posts[0], posts[1]];
        })
 } 
