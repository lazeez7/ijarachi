import React from 'react'
import Tel from './Tel.png'
import Sms from './Sms.png'
import locac from './locac.png'
import  './footer.scss'
import tg from './tg.png'
import insta from './insta.png'
import faceb from './faceb.png'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="footer__infor">
                <div className="footer__info">
                    <h5>Свяжитесь с нами</h5>
                    <div className="footer__tel">
                        <img src={Tel} alt="" />
                        <p>+998 00 000 00 00</p>
                    </div>
                    <div className="footer__sms">
                        <img src={Sms} alt="" />
                        <p>ijarachi@gmail.com</p>
                    </div>
                    <div className="footer__locac">
                        <img src={locac} alt="" />
                        <p>Узбекистан, Ташкент,<br /> Алишера Навои 21А</p>
                    </div>
                    <div className="footer__icons">
                        <img src={tg} alt="" />
                        <img src={insta} alt="" />
                        <img src={faceb} alt="" />
                    </div>
                </div>
                <div className="footer__info">
                    <h5>Компания</h5>
                    <div className="footer__komp">
                        <p>О нас</p>
                        <p>Преимущества</p>
                        <p>Команда</p>
                        <p>Партнеры</p>
                        <p>Сертификаты</p>
                    </div>
                </div>
                <div className="footer__info">
                    <h5>Полезные ссылки</h5>
                    <div className="footer__ssilka">
                        <p>Новости</p>
                        <p>Стати партнер</p>
                    </div>
                </div>
                <div className="footer__info">
                    <h5>Информация</h5>
                    <div className="footer__product">
                        <p>Все продукты</p>
                        <p>Получить консультацию</p>
                    </div>
                </div>
                
            </div>
            <div className="footer__line">        
            </div>
            <div className="footer__prava">
                <p>© 2023 ijarachi.uz. Все права защищены</p>
                <div className="ijara">
                <p>Разработка - </p>
                <a href="">ijarachi.uz</a>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default Footer