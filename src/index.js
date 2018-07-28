import React from 'react';
import ReactDOM from 'react-dom';
import Add from './components/Add';
import Delete from './components/Delete';
import Search from './components/Search';
import { Router, Route, browserHistory } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={Search}/>
        <Route path="/add" component={Add}/>
        <Route path="/delete" component={Delete}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
