import React from 'react'
import './CardBlock.scss'
import Maluba from './slide.png'

const CardBlock = () => {
  return (
    <>
    
    <div className="product">
        <div className="container">
            <div className="product__row ">
                <a className='product__link' href="#">главный</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
  <path d="M1 7.5L4 4L1 0.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                <a className='product__link link-active ' href="#">Малибу автомобиль</a>
            </div>

            <h2 className="product__title">Малибу автомобиль</h2>

            <div className="product__wrapper">
                <div className="product__slider">
                    <img src={Maluba} alt="" />

                </div>

                <div className="product__box ">
                    <p className="product__name">Малибу автомобиль</p>

                    <p className="product__desc">Это быстрая и комфортная  машина. Есть удобства.Это быстрая и комфортная <br /> машина. Есть удобства.</p>

                    <p className="product__link">
                        <span>Адрес:</span>
                        <a href="">Novza Metro</a>
                    </p>

                    <p className="product__link">
                        <span>Категория:</span>
                        <a href="#">Машина</a>
                    </p>

                    <p className="product__link">
                        <span>Подробности:</span>
                        <a href="">Машина большая , Машина <br /> большая , Машина большая</a>
                    </p>

                    <div className="product__price">
                        <b>10.5$/День</b>
                        <s>14.5$</s>
                    </div>

                    <div className="product__act">
                        <button className="product__btn">Арендовать сейчас</button>
                        <button className="product__btn btn-2">Сообщение </button>
                        <button className="product__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                        <path d="M20.8396 3.49592C20.3289 2.98492 19.7224 2.57957 19.055 2.303C18.3875 2.02644 17.6721 1.88409 16.9496 1.88409C16.2271 1.88409 15.5117 2.02644 14.8443 2.303C14.1768 2.57957 13.5704 2.98492 13.0596 3.49592L11.9996 4.55592L10.9396 3.49592C9.90794 2.46423 8.50866 1.88463 7.04963 1.88463C5.5906 1.88463 4.19132 2.46423 3.15963 3.49592C2.12794 4.52761 1.54834 5.92689 1.54834 7.38592C1.54834 8.84495 2.12794 10.2442 3.15963 11.2759L4.21963 12.3359L11.9996 20.1159L19.7796 12.3359L20.8396 11.2759C21.3506 10.7652 21.756 10.1587 22.0325 9.49127C22.3091 8.82382 22.4515 8.10841 22.4515 7.38592C22.4515 6.66343 22.3091 5.94802 22.0325 5.28056C21.756 4.61311 21.3506 4.00668 20.8396 3.49592Z" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>

                        <button className="product__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M9.36381 22.5C9.9412 22.5 10.4093 22.0523 10.4093 21.5C10.4093 20.9477 9.9412 20.5 9.36381 20.5C8.78643 20.5 8.31836 20.9477 8.31836 21.5C8.31836 22.0523 8.78643 22.5 9.36381 22.5Z" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.8638 22.5C21.4412 22.5 21.9093 22.0523 21.9093 21.5C21.9093 20.9477 21.4412 20.5 20.8638 20.5C20.2864 20.5 19.8184 20.9477 19.8184 21.5C19.8184 22.0523 20.2864 22.5 20.8638 22.5Z" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1 1.5H5.18182L7.98364 14.89C8.07924 15.3504 8.34109 15.764 8.72334 16.0583C9.1056 16.3526 9.58391 16.509 10.0745 16.5H20.2364C20.727 16.509 21.2053 16.3526 21.5876 16.0583C21.9698 15.764 22.2317 15.3504 22.3273 14.89L24 6.5H6.22727" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>


                </div>
            </div>

            <div className="product__tabs">
                <div className="product__tabs-top">
                    <b className='active'>О продукте</b>
                    <b>Адрес</b>
                    <b>О продавце</b>
                </div>

                <p className="product__tabs-text">
                Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства. Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства. Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства. Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства. Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства. Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства. Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства. Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства.Это быстрая и комфортная машина. Есть удобства.
                </p>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default CardBlock