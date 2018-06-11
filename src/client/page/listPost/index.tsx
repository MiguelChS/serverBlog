import * as React from 'react';
import { ListPost as ListPostComponent } from 'blg-listpost';
import { SearchBox } from './searchBox';
export const ListPost: React.SFC = (props:any) => {
  return(
    <div>
        <SearchBox />
        <ListPostComponent {...props}/>
    </div>
  )
}