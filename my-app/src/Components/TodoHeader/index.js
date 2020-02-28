import React from 'react'
import propTypes from 'prop-types'
export default function TodoHeader(props) {
  return (
    <>
      <h1>
        {props.title}
      </h1>
      {props.children}
    </>
  )
}

TodoHeader.defaultProps = {
  title: 'Todo',
}

TodoHeader.propTypes = {
  title: propTypes.string,
}
