import React from 'react';

class LikeButton extends React.Component {
  constructor(){
    super()
    this.state = {
      liked: false
    };
  }

  handleClick = (event) => {
    this.setState({
      liked: !this.state.liked
    });
  };



  render(){
    const status = this.state.liked ? '\u2665' : '\u2661'
    return(
    <div>
      <button onClick={this.handleClick}>{status}</button>
    </div>
  )
  }
}

export default LikeButton;
