import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
    return(
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{color: "red"}}>Get Wheater</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{color: "red"}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{color: "red"}}>Examples</Link>
      </div>
    );
}

export default Nav;
