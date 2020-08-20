import React, { Component } from 'react'
import { EyeFilled, HeartFilled, Html5Filled } from '@ant-design/icons';
import './index.less'
let data = `<p><strong>一、概述</strong></p>
<p>　　这里展示的CKEditor编辑器为4.12.1版本，官方地址为：https://ckeditor.com/</p>
<p>　　可在其官网上下载需要的版本，还可在线定制代码高亮插件!</p>
<p><strong>highlight.js（下方编辑器说明部分有该插件本站下载地址）</strong></p>
<p>关于代码高亮插件的在线定制教程可参考本站教程：https://www.jb51.net/article/163075.htm文章中还附带有highlight.js以及SyntaxHighlighter 代码高亮插件的下载地址，这里推荐使用</p>
<p><strong>二、效果展示</strong></p>
<p>　　1. 首先来看看代码高亮的显示效果，这里还是以 CKEditor4.12.1 引入文件代码为例，其js代码如下：</p>
<p>　　</p>
<p>　　<textarea cols="30" name="editor1" rows="10"></textarea></p>
<p>　　</p>
<p style='background: red'><img alt="" src="http://tools.jb51.net/images/codesnippet.png" style="width:181px" /></p>
<p>点击编辑器上的图标，在输入上述代码，即可完成如上所示的代码高亮效果。代码输入框如下图所示：</p>
<p><img alt="" src="http://tools.jb51.net/images/codesnippet_input.png" style="width:818px" /></p>
<p><img alt="" src="http://tools.jb51.net/images/code_tags.png" style="width:148px" /></p>
<p>2. 代码效果插件图标为，用法和文字加粗标签一样。感兴趣的同学可以试一下看看效果如何~</p>
`
export default class index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLike: false
    }
  }

  changeLike () {
    this.setState({
      isLike: true
    })
  }
  render () {
    let { isLike } = this.state
    return (
      <div className='questionInfo'>
        <h3 className='title'>关于es6不为人知的信息</h3>
        <div className="userInfo">
          <span>作者： MapleLeaves</span>
          <span><EyeFilled /> 120</span>
          <span>时间： 2020-12-12 12:12:12</span>
        </div>
        <div className="content" dangerouslySetInnerHTML={{__html: data}}>
        </div>
        <div className="like">
          喜欢就 &nbsp;
          <HeartFilled style={{ color: !isLike ? '#e0e0e0' : 'red', fontSize: '30px' }} onClick={this.changeLike.bind(this)} />
          &nbsp;一下吧 ~
        </div>
      </div>
    )
  }
}
