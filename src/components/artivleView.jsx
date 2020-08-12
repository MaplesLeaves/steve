import React, { Component } from 'react';

class artivleView extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <div style={{marginBottom: '10px'}}>
          {
            this.props.tag.map((item, index)=>{
            return <span style={{marginRight: '20px'}} key={index}>{item}</span>
            })
          }
        </div>
        <div className="content">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default artivleView