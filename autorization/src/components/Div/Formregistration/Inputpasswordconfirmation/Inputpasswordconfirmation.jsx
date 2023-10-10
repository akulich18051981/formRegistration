import React from 'react'
import st from './Inputpasswordconfirmation.module.scss'
export default function Inputpasswordconfirmation() {
  return (
    <input type='password' className={st.AppForm} placeholder='Пароль еще раз'/>
    
  )
}