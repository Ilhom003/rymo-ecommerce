import React from 'react'
import { Btn } from './style'

const Button = (props) => {
  return (
    <Btn onClick={props.onClick} size = {props.large} cl ={props.color} >{props.children}</Btn>
  )
}

export default Button