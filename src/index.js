import React, { Component } from 'react';
import { render } from 'react-dom';


import Light from './components/Light/light';

class App extends Component {

  render() {
    return (
      <Light />
    );
  }
}

render(<App />, document.getElementById('root'));
