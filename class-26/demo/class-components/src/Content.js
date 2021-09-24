import React from 'react';

class Content extends React.Component {
  
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <button onClick={() => this.props.changeDocTitle(this.props.title)}>Change Title</button>
      </>
    )
  }
}

export default Content;