import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import CadastroPage from './Pages/Cadastro/Page/CadastroPage'


function Routes() {
    return (


        <BrowserRouter>
            <Switch>
                <Route path='/LoginPage' component={LoginPage} />
                <Route path='/CadastroPage' component={CadastroPage} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;