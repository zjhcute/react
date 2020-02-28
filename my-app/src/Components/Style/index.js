import React from 'react'
import './index.css'
import classNames from 'classnames'
import RedLi from './Styled'

const greenText = { color: '#0f0' }
class Style extends React.Component {
  render() {
    return (
      <div>
        <h1>几种样式的写法</h1>
        <ol>
          <li style={{color: '#f40'}}>直接写在行间的样式</li>
          <li style={greenText}>把样式写成一个对象变量来使用</li>
          <li className='blue-text font-big'>引入css文件的样式</li>
          <li className={classNames('blue-text', {'font-big': true})}>使用classnames引入样式</li>
          <RedLi>使用styled-components</RedLi>
        </ol>
      </div>
    )
  }
}

export default Style