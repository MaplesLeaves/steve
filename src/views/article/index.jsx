/*
 * @Description: 文章列表
 * @Version: 2.0
 * @Autor: mapleLeaves
 * @Date: 2020-07-27 22:59:52
 * @LastEditors: mapleleaves
 * @LastEditTime: 2020-08-01 18:45:24
 * @weChat: 893774884
 */ 
import React, { Component } from 'react'
import { Card } from 'antd';
import ArtivleView from 'components/artivleView';
let data = []
for (let index = 0; index < 10; index++) {
  data.push(
    {
      title: '测试数据',
      content: '先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。',
      tagList: ['前端博客', "129view", 224]
    }
  )

}
export default class Article extends Component {
  render() {
    return (
      <div className='article' style={{ padding: '20px 0' }}> 
        {data.map((item, index) => {
          return <Card
            hoverable
            style={{ marginBottom: '20px' }}
            key={index}
          >
            <ArtivleView
              title={item.title}
              content={item.content}
              tag={item.tagList}
            />
          </Card>
        })
        }
      </div>
    )
  }
}
