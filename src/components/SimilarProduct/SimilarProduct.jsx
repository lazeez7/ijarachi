import React from "react";
import "./similarproduct.scss";
import Malibu from "./2021_24 1.png";

const SimilarProduct = () => {
  return (
    <>
      <section className="similar">
        <div className="container">
          <h2 className="similar__title">Похожие продукты</h2>
          <div className="similar__wrapper">
            <div className="similar__cards">
            <div className="similar__block">
              <div className="similar__img">
              <div className="similar__icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
  <path d="M22.5 0H2.5C1.1125 0 0.0125 1.1125 0.0125 2.5L0 17.5C0 18.8875 1.1125 20 2.5 20H22.5C23.8875 20 25 18.8875 25 17.5V2.5C25 1.1125 23.8875 0 22.5 0ZM8.125 13.75H6.625L3.4375 9.375V13.75H1.875V6.25H3.4375L6.5625 10.625V6.25H8.125V13.75ZM14.375 7.825H11.25V9.225H14.375V10.8H11.25V12.1875H14.375V13.75H9.375V6.25H14.375V7.825ZM23.125 12.5C23.125 13.1875 22.5625 13.75 21.875 13.75H16.875C16.1875 13.75 15.625 13.1875 15.625 12.5V6.25H17.1875V11.8875H18.6V7.4875H20.1625V11.875H21.5625V6.25H23.125V12.5Z" fill="#FF671B"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
  <path d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
                <img src={Malibu} alt="" />
              </div>



            <h2 className="similar__block_title">Малибу автомобиль</h2>
            <p className="similar__block_text">Это быстрая и комфортная машина. <br /> Есть удобства.Это быстрая и комфортная машина...</p>
            <div className="similar__link">
              <div className="similar__adress">
              <p>Адрес:</p>
              <a href="#" className="similar__active">Novza Metro</a>
              </div>
              <div className="similar__adress">
              <p>Категория:</p>
              <a href="#" className="similar__active">Машина</a>
              </div>
            </div>
              <div className="similar__prices">
                <p className="similar__price">10.5$/День</p>
                <a href="#" className="similar__active">Арендовать сейчас</a>
              </div>
            </div>
            <div className="similar__block">
              <div className="similar__img">
              <div className="similar__icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
  <path d="M22.5 0H2.5C1.1125 0 0.0125 1.1125 0.0125 2.5L0 17.5C0 18.8875 1.1125 20 2.5 20H22.5C23.8875 20 25 18.8875 25 17.5V2.5C25 1.1125 23.8875 0 22.5 0ZM8.125 13.75H6.625L3.4375 9.375V13.75H1.875V6.25H3.4375L6.5625 10.625V6.25H8.125V13.75ZM14.375 7.825H11.25V9.225H14.375V10.8H11.25V12.1875H14.375V13.75H9.375V6.25H14.375V7.825ZM23.125 12.5C23.125 13.1875 22.5625 13.75 21.875 13.75H16.875C16.1875 13.75 15.625 13.1875 15.625 12.5V6.25H17.1875V11.8875H18.6V7.4875H20.1625V11.875H21.5625V6.25H23.125V12.5Z" fill="#FF671B"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
  <path d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
                <img src={Malibu} alt="" />
              </div>



            <h2 className="similar__block_title">Малибу автомобиль</h2>
            <p className="similar__block_text">Это быстрая и комфортная машина. <br /> Есть удобства.Это быстрая и комфортная машина...</p>
            <div className="similar__link">
              <div className="similar__adress">
              <p>Адрес:</p>
              <a href="#" className="similar__active">Novza Metro</a>
              </div>
              <div className="similar__adress">
              <p>Категория:</p>
              <a href="#" className="similar__active">Машина</a>
              </div>
            </div>
              <div className="similar__prices">
                <p className="similar__price">10.5$/День</p>
                <a href="#" className="similar__active">Арендовать сейчас</a>
              </div>
            </div>
            <div className="similar__block">
              <div className="similar__img">
              <div className="similar__icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
  <path d="M22.5 0H2.5C1.1125 0 0.0125 1.1125 0.0125 2.5L0 17.5C0 18.8875 1.1125 20 2.5 20H22.5C23.8875 20 25 18.8875 25 17.5V2.5C25 1.1125 23.8875 0 22.5 0ZM8.125 13.75H6.625L3.4375 9.375V13.75H1.875V6.25H3.4375L6.5625 10.625V6.25H8.125V13.75ZM14.375 7.825H11.25V9.225H14.375V10.8H11.25V12.1875H14.375V13.75H9.375V6.25H14.375V7.825ZM23.125 12.5C23.125 13.1875 22.5625 13.75 21.875 13.75H16.875C16.1875 13.75 15.625 13.1875 15.625 12.5V6.25H17.1875V11.8875H18.6V7.4875H20.1625V11.875H21.5625V6.25H23.125V12.5Z" fill="#FF671B"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
  <path d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z" stroke="#242424" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              </div>
                <img src={Malibu} alt="" />
              </div>



            <h2 className="similar__block_title">Малибу автомобиль</h2>
            <p className="similar__block_text">Это быстрая и комфортная машина. <br /> Есть удобства.Это быстрая и комфортная машина...</p>
            <div className="similar__link">
              <div className="similar__adress">
              <p>Адрес:</p>
              <a href="#" className="similar__active">Novza Metro</a>
              </div>
              <div className="similar__adress">
              <p>Категория:</p>
              <a href="#" className="similar__active">Машина</a>
              </div>
            </div>
              <div className="similar__prices">
                <p className="similar__price">10.5$/День</p>
                <a href="#" className="similar__active">Арендовать сейчас</a>
              </div>
            </div>
            
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default SimilarProduct;
