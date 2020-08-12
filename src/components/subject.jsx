import React, { Component } from 'react'
import './index.less'
export default class Subject extends Component {
  render() {
    return (
      <div className='subject'>
        <h3>
          {this.props.data.title}
        </h3>
        <div>
          <img src={this.props.data.icon} alt=""/>
          <div>
            {this.props.data.content}
          </div>
        </div>
      </div>
    )
  }
}
