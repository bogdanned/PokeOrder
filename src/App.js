import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import PokeBuilder from './containers/PokeBuilder/PokeBuilder';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <PokeBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
