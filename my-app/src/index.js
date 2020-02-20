import React from 'react'
import ReactDom from 'react-dom'

// const name = 'deadPooI'

// const deadPooI = <h1>DP DP DP</h1>

// const createApp = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>this is news</p>
//     </div>
//   )
// }

const App = (props) => {
  const { title, content} = props
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}
ReactDom.render(
  // <h1>{name} is very nb !</h1>,
  // deadPooI,
  // createApp({title: 'NEWS'}),
  <App  title='News' content='this is the news'/>,
  document.querySelector('#root')
)