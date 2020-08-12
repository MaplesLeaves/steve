import React, { Component } from 'react';
import { LikeFilled, HeartFilled, EyeFilled } from '@ant-design/icons';
import './index.less'
class project extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    let  {title, content, praise, like, view} = this.props.data
    return (
      <div className='project'>
        <h3>
          {title}
        </h3>
        <div className="content">
          {content}
        </div>
        <ul>
          <li><LikeFilled className='viewBar' style={{ fontSize: '20px', color: 'black' }} />{praise}</li>
          <li><HeartFilled className='viewBar' style={{ fontSize: '20px', color: 'black' }} />{like}</li>
          <li><EyeFilled className='viewBar' style={{ fontSize: '20px', color: 'black' }} />{view}</li>
        </ul>

      </div>
    );
  }
}

export default project;