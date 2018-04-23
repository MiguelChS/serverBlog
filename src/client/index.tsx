import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Home } from './home'

render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>
    , document.getElementById("app"));