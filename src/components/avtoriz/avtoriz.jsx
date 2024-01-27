import React from 'react'
import './avtoriz.scss'

const Avtoriz = () => {
  return (
    <>
    <div className="avtoriz">
        <div className="container">
           <div className="avtoriz__card">
            <h3>Авторизаться</h3>
            <form className='avtoriz__form'>
              <input type="text" placeholder='имя пользователя' />
              <input type="text" placeholder='Пароль' />
              <button>Отправлять</button>
            </form>
            <p>Нет Аккаунта? <a href="">Регистрация</a></p>
           </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Avtoriz