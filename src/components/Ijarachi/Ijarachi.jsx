import React from "react";
import "./ijarachi.css";
import File from "./Vector.png";
import { Link } from "react-router-dom";
const Ijarachi = () => {
  return (
    <>
      <header className="nav">
        <div className="container">
          <div className="header__wrapper flex">
            
           <a href="/"><h1 className="logo">IJARACHI</h1></a> 
            

            <div className="header__box">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M15 13.0556C15 13.4386 14.8525 13.806 14.5899 14.0769C14.3274 14.3478 13.9713 14.5 13.6 14.5H2.4C2.0287 14.5 1.6726 14.3478 1.41005 14.0769C1.1475 13.806 1 13.4386 1 13.0556V2.94444C1 2.56135 1.1475 2.19395 1.41005 1.92307C1.6726 1.65218 2.0287 1.5 2.4 1.5H5.9L7.3 3.66667H13.6C13.9713 3.66667 14.3274 3.81885 14.5899 4.08973C14.8525 4.36062 15 4.72802 15 5.11111V13.0556Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Каталог
              </button>
              <input type="text" />
              <button className="search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M8.99997 17C13.4182 17 17 13.4183 17 9C17 4.58172 13.4182 1 8.99997 1C4.58169 1 0.999969 4.58172 0.999969 9C0.999969 13.4183 4.58169 17 8.99997 17Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.35 19.35L15 15"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="header__menu">
              <div className="box">
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.14287 25C9.66886 25 10.0953 24.5736 10.0953 24.0476C10.0953 23.5216 9.66886 23.0952 9.14287 23.0952C8.61689 23.0952 8.19049 23.5216 8.19049 24.0476C8.19049 24.5736 8.61689 25 9.14287 25Z"
                    stroke="#242424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.6191 25C20.1451 25 20.5714 24.5736 20.5714 24.0476C20.5714 23.5216 20.1451 23.0952 19.6191 23.0952C19.0931 23.0952 18.6667 23.5216 18.6667 24.0476C18.6667 24.5736 19.0931 25 19.6191 25Z"
                    stroke="#242424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.5238 5H5.33333L7.88571 17.7524C7.9728 18.1909 8.21134 18.5847 8.55956 18.865C8.90779 19.1454 9.34352 19.2943 9.79047 19.2857H19.0476C19.4946 19.2943 19.9303 19.1454 20.2785 18.865C20.6267 18.5847 20.8653 18.1909 20.9524 17.7524L22.4762 9.7619H6.28571"
                    stroke="#242424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <rect x="16" width="12" height="12" rx="6" fill="#FF671B" />
                  <path
                    d="M21.804 9V4.592H20.668V3.992C20.8813 3.976 21.0733 3.952 21.244 3.92C21.4147 3.88267 21.5667 3.82133 21.7 3.736C21.8333 3.64533 21.9507 3.51467 22.052 3.344H22.652V9H21.804Z"
                    fill="white"
                  />
                </svg>

                <a href="">Корзина</a>
              </div>

              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                >
                  <path
                    d="M20.8398 3.49592C20.329 2.98492 19.7226 2.57957 19.0551 2.303C18.3876 2.02644 17.6722 1.88409 16.9498 1.88409C16.2273 1.88409 15.5119 2.02644 14.8444 2.303C14.1769 2.57957 13.5705 2.98492 13.0598 3.49592L11.9998 4.55592L10.9398 3.49592C9.90806 2.46423 8.50879 1.88463 7.04975 1.88463C5.59072 1.88463 4.19144 2.46423 3.15975 3.49592C2.12806 4.52761 1.54846 5.92689 1.54846 7.38592C1.54846 8.84495 2.12806 10.2442 3.15975 11.2759L4.21975 12.3359L11.9998 20.1159L19.7798 12.3359L20.8398 11.2759C21.3507 10.7652 21.7561 10.1587 22.0327 9.49127C22.3092 8.82382 22.4516 8.10841 22.4516 7.38592C22.4516 6.66343 22.3092 5.94802 22.0327 5.28056C21.7561 4.61311 21.3507 4.00668 20.8398 3.49592Z"
                    stroke="#242424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <a href="">Избранное</a>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                >
                  <path
                    d="M11.5 14C13.1569 14 14.5 12.6569 14.5 11C14.5 9.34315 13.1569 8 11.5 8C9.84315 8 8.5 9.34315 8.5 11C8.5 12.6569 9.84315 14 11.5 14Z"
                    stroke="#242424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.2273 13.7273C18.1063 14.0015 18.0702 14.3056 18.1236 14.6005C18.1771 14.8954 18.3177 15.1676 18.5273 15.3818L18.5818 15.4364C18.7509 15.6052 18.885 15.8057 18.9765 16.0265C19.068 16.2472 19.1151 16.4838 19.1151 16.7227C19.1151 16.9617 19.068 17.1983 18.9765 17.419C18.885 17.6397 18.7509 17.8402 18.5818 18.0091C18.413 18.1781 18.2124 18.3122 17.9917 18.4037C17.771 18.4952 17.5344 18.5423 17.2955 18.5423C17.0565 18.5423 16.8199 18.4952 16.5992 18.4037C16.3785 18.3122 16.178 18.1781 16.0091 18.0091L15.9545 17.9545C15.7403 17.745 15.4682 17.6044 15.1733 17.5509C14.8784 17.4974 14.5742 17.5335 14.3 17.6545C14.0311 17.7698 13.8018 17.9611 13.6403 18.205C13.4788 18.4489 13.3921 18.7347 13.3909 19.0273V19.1818C13.3909 19.664 13.1994 20.1265 12.8584 20.4675C12.5174 20.8084 12.0549 21 11.5727 21C11.0905 21 10.6281 20.8084 10.2871 20.4675C9.9461 20.1265 9.75455 19.664 9.75455 19.1818V19.1C9.74751 18.7991 9.65011 18.5073 9.47501 18.2625C9.29991 18.0176 9.05521 17.8312 8.77273 17.7273C8.49853 17.6063 8.19437 17.5702 7.89947 17.6236C7.60456 17.6771 7.33244 17.8177 7.11818 18.0273L7.06364 18.0818C6.89478 18.2509 6.69425 18.385 6.47353 18.4765C6.2528 18.568 6.01621 18.6151 5.77727 18.6151C5.53834 18.6151 5.30174 18.568 5.08102 18.4765C4.86029 18.385 4.65977 18.2509 4.49091 18.0818C4.32186 17.913 4.18775 17.7124 4.09626 17.4917C4.00476 17.271 3.95766 17.0344 3.95766 16.7955C3.95766 16.5565 4.00476 16.3199 4.09626 16.0992C4.18775 15.8785 4.32186 15.678 4.49091 15.5091L4.54545 15.4545C4.75503 15.2403 4.89562 14.9682 4.9491 14.6733C5.00257 14.3784 4.96647 14.0742 4.84545 13.8C4.73022 13.5311 4.53887 13.3018 4.29497 13.1403C4.05107 12.9788 3.76526 12.8921 3.47273 12.8909H3.31818C2.83597 12.8909 2.37351 12.6994 2.03253 12.3584C1.69156 12.0174 1.5 11.5549 1.5 11.0727C1.5 10.5905 1.69156 10.1281 2.03253 9.78708C2.37351 9.4461 2.83597 9.25455 3.31818 9.25455H3.4C3.7009 9.24751 3.99273 9.15011 4.23754 8.97501C4.48236 8.79991 4.66883 8.55521 4.77273 8.27273C4.89374 7.99853 4.92984 7.69437 4.87637 7.39947C4.8229 7.10456 4.68231 6.83244 4.47273 6.61818L4.41818 6.56364C4.24913 6.39478 4.11503 6.19425 4.02353 5.97353C3.93203 5.7528 3.88493 5.51621 3.88493 5.27727C3.88493 5.03834 3.93203 4.80174 4.02353 4.58102C4.11503 4.36029 4.24913 4.15977 4.41818 3.99091C4.58704 3.82186 4.78757 3.68775 5.00829 3.59626C5.22901 3.50476 5.46561 3.45766 5.70455 3.45766C5.94348 3.45766 6.18008 3.50476 6.4008 3.59626C6.62152 3.68775 6.82205 3.82186 6.99091 3.99091L7.04545 4.04545C7.25971 4.25503 7.53183 4.39562 7.82674 4.4491C8.12164 4.50257 8.4258 4.46647 8.7 4.34545H8.77273C9.04161 4.23022 9.27092 4.03887 9.43245 3.79497C9.59397 3.55107 9.68065 3.26526 9.68182 2.97273V2.81818C9.68182 2.33597 9.87338 1.87351 10.2144 1.53253C10.5553 1.19156 11.0178 1 11.5 1C11.9822 1 12.4447 1.19156 12.7856 1.53253C13.1266 1.87351 13.3182 2.33597 13.3182 2.81818V2.9C13.3193 3.19253 13.406 3.47834 13.5676 3.72224C13.7291 3.96614 13.9584 4.15749 14.2273 4.27273C14.5015 4.39374 14.8056 4.42984 15.1005 4.37637C15.3954 4.3229 15.6676 4.18231 15.8818 3.97273L15.9364 3.91818C16.1052 3.74913 16.3057 3.61503 16.5265 3.52353C16.7472 3.43203 16.9838 3.38493 17.2227 3.38493C17.4617 3.38493 17.6983 3.43203 17.919 3.52353C18.1397 3.61503 18.3402 3.74913 18.5091 3.91818C18.6781 4.08704 18.8122 4.28757 18.9037 4.50829C18.9952 4.72901 19.0423 4.96561 19.0423 5.20455C19.0423 5.44348 18.9952 5.68008 18.9037 5.9008C18.8122 6.12152 18.6781 6.32205 18.5091 6.49091L18.4545 6.54545C18.245 6.75971 18.1044 7.03183 18.0509 7.32674C17.9974 7.62164 18.0335 7.9258 18.1545 8.2V8.27273C18.2698 8.54161 18.4611 8.77092 18.705 8.93245C18.9489 9.09397 19.2347 9.18065 19.5273 9.18182H19.6818C20.164 9.18182 20.6265 9.37338 20.9675 9.71435C21.3084 10.0553 21.5 10.5178 21.5 11C21.5 11.4822 21.3084 11.9447 20.9675 12.2856C20.6265 12.6266 20.164 12.8182 19.6818 12.8182H19.6C19.3075 12.8193 19.0217 12.906 18.7778 13.0676C18.5339 13.2291 18.3425 13.4584 18.2273 13.7273Z"
                    stroke="#242424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <a href="">Настройки</a>
              </div>
              <div className="box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                >
                  <path
                    d="M19 21V18.7778C19 17.599 18.5259 16.4686 17.682 15.6351C16.8381 14.8016 15.6935 14.3333 14.5 14.3333H5.5C4.30653 14.3333 3.16193 14.8016 2.31802 15.6351C1.47411 16.4686 1 17.599 1 18.7778V21"
                    stroke="#242424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 9.88889C12.4853 9.88889 14.5 7.89904 14.5 5.44444C14.5 2.98985 12.4853 1 10 1C7.51472 1 5.5 2.98985 5.5 5.44444C5.5 7.89904 7.51472 9.88889 10 9.88889Z"
                    stroke="#242424"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <a href="">Профиль</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Ijarachi;
