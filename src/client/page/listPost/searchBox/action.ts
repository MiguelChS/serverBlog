export type GET_POST_FILTER = "GET_POST_FILTER";
import { IProps } from 'blg-post';
import { loadListPost } from 'blg-listpost';

export interface IgetPostFilter {
  type: GET_POST_FILTER
  value: Array<IProps>
}

export async function getPostFilter(filtro: string, dispatch: any) {
  let response = await fetch(`/api/filter/${filtro}`);
  if (!response.ok || response.status != 200){
    dispatch(loadListPost([]))
  }else{
    let lista = await response.json();
    dispatch(loadListPost(lista))
  }
}