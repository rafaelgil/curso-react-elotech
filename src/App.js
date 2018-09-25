import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Header from './Header';
import Configuracoes from './Configuracoes';
import Home from './Home';
import Perfil from './Perfil';
import NotFound from './NotFound';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      logado: false
    }
  }

  onLogin = () => {
    this.setState({logado: true});
  }

  onLogout = () => {
    this.setState({logado: false});
  }

  render() {
    const logado = this.state.logado;

    return (
      <div>
        <BrowserRouter>
          <div>
            <Header logado={logado} onLogin={this.onLogin} onLogout={this.onLogout}></Header>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/configuracao" exact component={Configuracoes}/>
              <Route path="/perfil" exact component={Perfil}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    )
  }
 
}

export default withRouter(App);
