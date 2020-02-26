import React from 'react'
import ReactDom from 'react-dom'
import Style from './Components/Style'
// 使用JSX渲染变量
// const name = 'deadPooI'

// 直接将变量定义成JSX语法写成的元素
// const deadPooI = <h1>DP DP DP</h1>

// 使用函数创建组件
// const createApp = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>this is news</p>
//     </div>
//   )
// }

// 经过React封装过后的函数式组件写法
// const App = (props) => {
//   const { title, content} = props
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{content}</p>
//     </div>
//   )
// }

// // 创建一个类组件
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <p>{this.props.content}</p>
//       </div>
//     )
//   }
// }

ReactDom.render(
  // <h1>{name} is very nb !</h1>,
  // deadPooI,
  // createApp({title: 'NEWS'}),
  // <App  title='News' content='this is the news'/>,
  <Style />,
  document.querySelector('#root')
)