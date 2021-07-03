import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import CreateClass from './pages/CreateClass/CreateClass'
import ListClass from './pages/ListClass/ListClass'


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/create-class" exact component={ CreateClass } />
                <Route path="/list-class" exact component={ ListClass } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
