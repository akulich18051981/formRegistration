import React from 'react'
import Inputlogin from './Input/Input.jsx';
import Inputpassword from './Inputpassword/Inputpassword.jsx';
import Button from './Button/Button.jsx';
export default function Formregistration() {
  return (

    <div className="App">
      <h1 className='FormTitle'>Авторизация</h1>
      <form>
        <Inputlogin />
        <Inputpassword />
        <Button />
      </form>
    </div>

  )
}