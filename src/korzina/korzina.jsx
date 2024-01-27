import React from 'react'
import strel from './strel.png'
import maluba from './maluba.png'
import korzina from './korzina.png'
import './korzina.scss'

const Korzina = () => {
  return (
    <>
    <div className="korzina">
        <div className="container">
            <div className="korzina__wrapper">
                <div className="korzina__glav">
                    <p>главный</p>
                    <img src={strel} alt="" />
                    <p>Корзина</p>
                </div>
                <h2>Корзина</h2>
                <div className="korzina__cards">
                    <div className="korzina__card">
                        <img src={maluba} alt="" />
                        <div className="korzina__box">
                            <p>Продукт:</p>
                            <p>Малибу автомобиль</p>
                        </div>
                        <div className="korzina__box">
                            <p>Адрес:</p>
                            <p>Novza Metro</p>
                        </div>
                        <div className="korzina__box">
                            <p>Категория:</p>
                            <p>Машина</p>
                        </div>
                        <div className="korzina__box">
                            <p>Цена:</p>
                            <p>10.5$/День</p>
                        </div>
                        <img src={korzina} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Korzina