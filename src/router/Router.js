import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from "../components/AboutRouter"
import Index from "../components/IndexRouter"
import App from "../App"

const BasicRoute = ()=>(
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/index/:id" component={Index}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </BrowserRouter>
)
export default BasicRoute;