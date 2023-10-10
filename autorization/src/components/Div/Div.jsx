import React from 'react'
import st from './Div.module.scss'
import logoImg from './images/Logo.png';
import Formregistration from './Formregistration/Formregistration';
import Formauthorization from './Formauthorization/Formauthorization';
export default function Conteyner() {
  return (
    <div className={st.Conteyner}>
      <img src={logoImg} alt="logo" className="imeg" />
      <Formregistration/>
      {/* <Formauthorization/> */}
      <div className='texttitle'><p className='text'>Уже зарегистрированы? <a href='a' className='textenter'>Войти</a></p> </div>
    </div>
  )
}