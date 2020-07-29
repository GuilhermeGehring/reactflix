import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/cadastro/Home';
import Video from './pages/cadastro/Video'
import Categoria from './pages/cadastro/Categoria'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={Video} />        
      <Route path="/cadastro/categoria" component={Categoria} />        
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
