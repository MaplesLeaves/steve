/*
 * @Description: 关于我的个人项目介绍
 * @Version: 2.0
 * @Autor: mapleLeaves
 * @Date: 2020-07-27 22:59:52
 * @LastEditors: mapleleaves
 * @LastEditTime: 2020-08-01 22:56:23
 * @weChat: 893774884
 */
import React, { Component } from 'react';
import Project from 'components/project'
let data = []
for (let i = 0; i < 10; i++) {
  data.push({
    title: '三台合一接處警',
    content: '先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。',
    praise: '10',
    like: '20',
    view: '90',
  })
}
class aboutUs extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='aboutUs'>
        {
          data.map((item,index)=>{
            return <Project data={item} key={index}/>
          })
        }
      </div>
    );
  }
}

export default aboutUs;