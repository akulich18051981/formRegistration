import React from 'react'
import st from './Input.module.scss'
export default function Inputlogin() {
  return (
    <input
      className={st.AppForm}
      type="text"
      placeholder='Логин' />
  )
}
