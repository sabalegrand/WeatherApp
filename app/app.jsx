import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main';

import Weather from './components/Weather.jsx';
import About from './components/About.jsx';
import Examples from './components/Examples.jsx';

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!./styles/app.css');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
