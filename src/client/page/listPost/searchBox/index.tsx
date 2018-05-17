import * as React from 'react';
import { connect } from 'react-redux';
import { getPostFilter } from './action';


export interface IProps {
  search(text: string): any
}

const SearchBoxComponent: React.SFC<IProps> = ({ search }) => {
  const onClickButton = () => {
    let input: any = document.getElementById("inputFiltro");
    if (input) {
      search(input.value);
    }
  }

  return (
    <form style={{ marginBottom: "8px" }}>
      <div className="row">
        <div className="col-xs-12">
          <div className="input-group">
            <input className="form-control" id="inputFiltro" type="text" placeholder="Buscar ..." />
            <span className="input-group-btn">
              <button className="btn btn-default" onClick={onClickButton} type="button">Buscar</button>
            </span>
          </div>
        </div>
      </div>
    </form>
  )
}
const mapDispacht = (dispatch: any) => {
  return {
    search: (data: string) => {
      return getPostFilter(data, dispatch);
    }
  }
}

export const SearchBox = connect(null, mapDispacht)(SearchBoxComponent)