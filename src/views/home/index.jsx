import React, { Component } from 'react'
import './../../assets/horse.less'
import './index.less'
export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }
  componentDidMount(){
    let data = this.refs.text.innerHTML
    let index = 0
    
    let showText =  setInterval(() =>{
      this.refs.text.innerText =  data.substring(0,index++)
      if(index === 1){
        this.setState({
          show: true
        })
      }
      if(index === data.length){
        clearInterval(showText)
      }
    }, 200)
  }
  render () {
    let {show} = this.state
    return (
      <div className='horse'>
        
        <div ref='text' className='homeText' style={{display: show ? 'inline-block' : 'none'}}>
        先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
        </div>
          <div className="horseInfo animate">
            <div className="front-leg right">
              <div className="shoulder">
                <div className="upper">
                  <div className="knee">
                    <div className="lower">
                      <div className="ankle">
                        <div className="foot">
                          <div className="hoof"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="back-leg right">
              <div className="top">
                <div className="thigh">
                  <div className="lower-leg">
                    <div className="foot">
                      <div className="hoof"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tail">
              <div className="nub">
                <div className="section">
                  <div className="section">
                    <div className="section">
                      <div className="section">
                        <div className="section">
                          <div className="section last">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="section">
                <div className="section">
                  <div className="section">
                    <div className="section">
                      <div className="section last">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="back-side"></div>
            </div>

            <div className="neck">
              <div className="under"></div>
              <div className="front"></div>
              <div className="base"></div>
              <div className="top"></div>
              <div className="shoulder"></div>
            </div>
            <div className="front-leg left">
              <div className="shoulder">
                <div className="upper">
                  <div className="knee">
                    <div className="lower">
                      <div className="ankle">
                        <div className="foot">
                          <div className="hoof"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="back-leg left">
              <div className="top">
                <div className="thigh">
                  <div className="lower-leg">
                    <div className="foot">
                      <div className="hoof"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="head">
              <div className="skull"></div>
              <div className="nose"></div>
              <div className="face"></div>
              <div className="lip"></div>
              <div className="jaw"></div>
              <div className="chin"></div>
              <div className="ear"></div>
              <div className="eye"></div>
            </div>
          </div>

          <div className="dust front">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <div className="dust back">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
      </div>
    )
  }
}
