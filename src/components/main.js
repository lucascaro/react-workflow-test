import React from 'react';
import {RouteHandler, Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Example</h1>
        <Link to='/simple'>Go to simple route...</Link>
        <Link to='/example'>Go to the Example page...</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
