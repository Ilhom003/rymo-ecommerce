import React from 'react'
import { Btn } from './style'

const Button = (props) => {
  return (
    <Btn size = {props.large} cl ={props.type} >{props.children}</Btn>
  )
}

export default Button