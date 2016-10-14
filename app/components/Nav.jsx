import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {

  constructor(props) {
    super();
  }

  onSearch (e) {
    e.preventDefault();
    alert("rien pour l'instant");
  }

  render() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React WeatherApp</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Wheater</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form action="" onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Nav;
