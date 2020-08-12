import React, { Component } from 'react'
import { Layout } from 'antd';
import { renderRoutes } from 'react-router-config'
import './index.less'
const { Header, Content } = Layout;
export default class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header className='headerTitle'>
            <ul className='headerBar'>
              <li>首页</li>
              <li>文章</li>
              <li>面试题</li>
              <li>关于我</li>
              <li>留言</li>
            </ul>
            <div>
              <img src="https://iknow-pic.cdn.bcebos.com/63d0f703918fa0ec3d4dbc5b2b9759ee3c6ddbda?x-bce-process=image/resize,m_lfit,w_600,h_800,limit_1" alt="" />
            </div>
          </Header>
          <Content style={{ width: '1220px', margin: '0 auto', padding: '0 20px', overflowY: 'auto', background: 'white' }}>
          {renderRoutes(this.props.route.routes)}
          </Content>
        </Layout>
      </div>
    )
  }
}
