/*
 * @Author: your name
 * @Date: 2020-08-18 17:13:06
 * @LastEditTime: 2020-08-19 14:32:02
 * @LastEditors: Please set LastEditors
 * @Description: 留言板页面
 * @FilePath: \taibaoc:\Users\Lenovo\Desktop\test\steve\src\views\message\message.jsx
 */
import React, { Component } from 'react'
import './index.less'
import { Divider, Row, Col, Input, Button, Form, Upload } from 'antd';
const ListMessage = ({ data , num}) => {
  return (
    <div className='listItem'>
      <h3>{data.name} &nbsp;&nbsp;&nbsp; 第{++num}楼</h3>
      <p>{data.content}</p>
      <span>{data.time}</span>
    </div>
  )
}
const { TextArea } = Input;
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};
let data = []
for (let i = 0; i < 20; i++) {
  data.push({
    name: 'zhangsan',
    content: '天行健，君子以自强不息, 地势坤，君子以厚德载物',
    time: '2020-08-19'
  })
}
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default class message extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg'
    }
  }
  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  }
  render() {
    // let {imageUrl} = this.state
    return (
      <Row className='message'>
        <Divider orientation="left">
          <span className='messageTitle'>留言板</span>
        </Divider>
        <Col span={18}>
          <Form  {...formItemLayout}>
            <Form.Item label="姓名">
              <Input placeholder='请输入姓名' maxLength={15}></Input>
            </Form.Item>
            {/* <Form.Item label="头像">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                onChange={this.handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : '上传图像'}
              </Upload>
            </Form.Item> */}
            <Form.Item label="留言">
              <TextArea rows={4}></TextArea>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 2 }}>
              <Button type="primary" >
                留言
                </Button>
            </Form.Item>
          </Form>
        </Col>
        <Divider orientation="left">
          <span className='messageTitle'>留言条</span>
        </Divider>
        <Col span={24}>
          {
            data.map((item, index) => {
              return <ListMessage data={item} num={index} key={index} />
            })
          }
        </Col>
      </Row>
    )
  }
}
