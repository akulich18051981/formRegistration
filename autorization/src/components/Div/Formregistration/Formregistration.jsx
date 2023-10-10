import React from 'react'
import Inputlogin from './Input/Input.jsx';
import Inputpassword from './Inputpassword/Inputpassword.jsx';
import Inputpasswordconfirmation from './Inputpasswordconfirmation/Inputpasswordconfirmation.jsx';
import Button from './Button/Button.jsx';
export default function Formregistration() {
    return (
      
        <div className="App">
          <h1 className='FormTitle'>Регистрация</h1>
          <form>
            <Inputlogin />
            <Inputpassword />
            <Inputpasswordconfirmation />
            <Button />
          </form>
        </div>
       
    )
  }