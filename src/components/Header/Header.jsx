import React from 'react'
import './header.css'
import Insta from './Frame 6.png'
import Face from './Vector.png'
import Flag from './Flag_of_Russia 1.png'

const Header = () => {
  return (
    <>
    
    <div className="wrap">
        <div className="header">
            <div className="head_icons flex">
                <img src={Insta} alt="" />
                <img src={Face} alt="" />
                <img src={Flag} alt="" />
                <select name="" id="">
                <option value="ru">Русский</option>
                <option value="ru">Uzbek</option>
               
            </select>
            </div>
           
            <div className="head_nav flex">
                <a href="#">Сервис центр</a>
                <a href="#">Помощь</a>
                <a href="#">Карта сайта</a>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Header