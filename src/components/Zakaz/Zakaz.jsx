import React from 'react'
import './zakaz.scss'

const Zakaz = () => {
  return (
    <>  
    
    <div className="zakaz">
        <div className="container">
            <div className="zakaz__border">
                <h5>Заказ</h5>
                <div className="zakaz__price">
                <p>Продукты</p>
                <p className='price '>4</p>
                <p>Итоговая цена:</p>
                <p className='price'>100</p>
                </div>
            </div>
            <div className="zakaz__border_1">
                <h5>Заказать</h5>
                <div className="zakaz__input">
                  <input type="text"  className='input' placeholder='Ваше имя'/>
                  <input type="text"  className='input' placeholder='Ваш номер телефона'/>
                  <button>Отправлять</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Zakaz