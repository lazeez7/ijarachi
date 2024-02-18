import React from "react";
import "./financial.scss";

const Financial = () => {
  return (
    <>
      <div className="financial">
        <div className="container">
          <div className="financial__wrapper">
          <div className="financial__btn">
            <button className="financial__btn-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
              >
                <path
                  d="M11 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V7L11 1Z"
                  stroke="#242424"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 1V7H17"
                  stroke="#242424"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 12H5"
                  stroke="#242424"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 16H5"
                  stroke="#242424"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 8H6H5"
                  stroke="#242424"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              Основная информация
            </button>
            <button className="financial__btn-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M18.7778 1H3.22222C1.99492 1 1 1.99492 1 3.22222V18.7778C1 20.0051 1.99492 21 3.22222 21H18.7778C20.0051 21 21 20.0051 21 18.7778V3.22222C21 1.99492 20.0051 1 18.7778 1Z"
                  stroke="#242424"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                  stroke="#242424"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 14.4545L15.375 9L3 21"
                  stroke="#242424"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              Изображений
            </button>
            <button className="financial__btn-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  d="M20.8 5H3.2C1.98497 5 1 6.02335 1 7.28571V18.7143C1 19.9767 1.98497 21 3.2 21H20.8C22.015 21 23 19.9767 23 18.7143V7.28571C23 6.02335 22.015 5 20.8 5Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 21V3.22222C16 2.63285 15.7893 2.06762 15.4142 1.65087C15.0391 1.23413 14.5304 1 14 1H10C9.46957 1 8.96086 1.23413 8.58579 1.65087C8.21071 2.06762 8 2.63285 8 3.22222V21"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Финансовый шаг
            </button>
          </div>
          <div className="fuck">
          <div className="financial__input">
            <input type="text"  placeholder="Цена" className="financ__input"/>
            <input type="text" placeholder="О цене" className="financ__input"/>
          </div>
          <div className="financial__btnns">
              <button className="btn__1">Предыдущий шаг</button>
              <button className="btn__2">Следующий шаг</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Financial;
