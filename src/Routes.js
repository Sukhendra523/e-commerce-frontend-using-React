import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'

export default function(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signup' exact component={Signup}/>
                <Route path='/signin' exact component={Signin}/>

            </Switch>
        </BrowserRouter>
    )
}