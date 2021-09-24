import React from 'react';
import Content from './Content.js';
import './style.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  changeDocTitle = title => {
    document.title = title;
  }

  render() {
    return (
      <>
        <Content changeDocTitle={this.changeDocTitle} title="cool component" />
        <Content changeDocTitle={this.changeDocTitle} title="another component" />
        <Content changeDocTitle={this.changeDocTitle} title="sad component" />
        <Content changeDocTitle={this.changeDocTitle} title="happy component" />
      </>
    )
  }
}

export default App;
