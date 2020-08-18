/*
 * @Author: your name
 * @Date: 2020-08-18 17:13:06
 * @LastEditTime: 2020-08-18 17:55:18
 * @LastEditors: Please set LastEditors
 * @Description: 留言板页面
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steve\src\views\message\message.jsx
 */
import React, { Component } from 'react'
import  './index.less'
import { Divider } from 'antd';
export default class message extends Component {
    render() {
        return (
            <div className='message'>
                <Divider orientation="left"> 
                    <span className='messageTitle'>留言板</span>
                </Divider>
            </div>
        )
    }
}
