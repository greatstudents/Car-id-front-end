import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">车牌查询</Link>
          </li>
          <li>
           <Link to="/add">添加车牌</Link>
          </li>
          <li>
           <Link to="/delete">删除车牌</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
