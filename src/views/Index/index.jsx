import React, { Component } from 'react'
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config'
import './index.less'
const { Header, Content } = Layout;
let navBar = [
  {
    id: '1',
    name: '首页',
    path: '/index/home',
    pathName: 'home'
  },
  {
    id: '2',
    name: '文章',
    path: '/index/article',
    pathName: 'article'
  },
  {
    id: '3',
    name: '面试题',
    path: '/index/board',
    pathName: 'board'
  },
  {
    id: '4',
    name: '关于我',
    path: '/index/aboutUs',
    pathName: 'aboutUs'
  },
  {
    id: '5',
    name: '留言',
    path: '/index/message',
    pathName: 'home'
  }
]
export default class Home extends Component {
  tokpage(val){
    console.error(val)
    this.props.history.push(val)
  }
  render() {
    return (
      <div>
        <Layout>
          <Header className='headerTitle'>
            <ul className='headerBar'>
              {
                navBar.map(item=>{
                return <li key={item.id} onClick={()=>this.tokpage(item.path)}>{item.name}</li>
                })
              }
            </ul>
            <div>
              <img src="https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ec3d4dbc5b2b9759ee3c6ddbda?x-bce-process=image/resize,m_lfit,w_600,h_800,limit_1" alt="" />
            </div>
          </Header>
          <Content style={{minWidth: '1180px',  margin: '0 auto', padding: '0 20px', overflowY: 'auto', background: 'white' }}>
          {renderRoutes(this.props.route.routes)}
          </Content>
        </Layout>
      </div>
    )
  }
}
