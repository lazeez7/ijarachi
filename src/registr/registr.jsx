import React from 'react'
import './registr.scss'

const Registr = () => {
  return (
    <>
    <div className="registr">
        <div className="container">
            <div className="registr__card">
                <h3>Регистрация</h3>
                <form className='registr__form'>
                    <input type="text" placeholder='имя пользователя*' />
                    <input type="text" placeholder='Номер телефона*' />
                    <input type="text" placeholder='Электронная почта' />
                    <input type="text" placeholder='Пароль' />
                    <input type="text" placeholder='Повторный пароль' />
                    <button>Отправлять</button>
                </form>
                <p>У вас есть аккаунт? <a href="">Авторизоваться</a></p>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Registr