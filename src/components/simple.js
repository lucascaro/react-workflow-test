import React from 'react';
import {Link} from 'react-router';
import connectToStores from 'alt/utils/connectToStores';
import DummyStore from 'stores/dummyStore';

@connectToStores
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }

  static getStores(props) {
    return [DummyStore];
  }

  static getPropsFromStores(props) {
    return DummyStore.getState();
  }

  render() {
    return (
      <div>
        <h1>Simple {this.state.name}</h1>
        <p>
          This is a simple route that is embedded into our page.
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
