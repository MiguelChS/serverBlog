import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import {Home} from './page/home';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { store } from './store'

render(
    <Provider store={store}>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </Provider>
    , document.getElementById("app"));