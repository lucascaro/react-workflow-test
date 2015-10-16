import React from 'react';
import {Router, Route} from 'react-router';

import Main from 'components/main';
import Simple from 'components/simple';
import Example from 'components/example';

const routes = (
  <Router>
    <Route path='/' component={Main}>
      <Route path='simple' component={Simple} />
      <Route path='example' name='example' component={Example} />
      <Route path="*" component={Simple}/>
    </Route>
  </Router>
);

export default routes;
