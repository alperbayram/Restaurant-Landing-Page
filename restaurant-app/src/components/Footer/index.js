import React from 'react';
import { Col, Form, Row, Stack } from 'react-bootstrap';
import style from './style.module.css';
function Footer() {
  return (
    <div>
      <div className="container-xl pt-5">
        <Stack className="text-center" gap={5}>
          <div>
            <em className={style.headerfooter}>
              Get notified <br />
              about new amazing products
            </em>
          </div>
          <div>
            <em className={style.footertitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
              adipiscing cursus auctor eget sed phasellus senectus.
            </em>
          </div>
          <div>
            <input
              size="lg"
              type="text"
              placeholder="E-mail"
              className={style.search}
            />
          </div>
          <div>
            <ul className="d-flex list-unstyled justify-content-center ps-5 pe-5">
              <li className={style.list}>Product</li>
              <li className={style.list}>Company</li>
              <li className={style.list}>Learn more</li>
              <li className={style.list}>Get in touch</li>
            </ul>
          </div>
        </Stack>
        <div className='d-flex align-items-center justify-content-sm-end justify-content-center'>
              <ul className="d-flex list-unstyled m-0">
                <li className={style.icon}>
                  <svg
                    width="11"
                    height="20"
                    viewBox="0 0 11 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0055 0.00400128L7.51173 0C4.71006 0 2.8995 1.8576 2.8995 4.73272V6.91482H0.392122C0.175455 6.91482 0 7.09047 0 7.30714V10.4688C0 10.6854 0.175655 10.8609 0.392122 10.8609H2.8995V18.8386C2.8995 19.0553 3.07495 19.2308 3.29162 19.2308H6.56304C6.77971 19.2308 6.95516 19.0551 6.95516 18.8386V10.8609H9.88687C10.1035 10.8609 10.279 10.6854 10.279 10.4688L10.2802 7.30714C10.2802 7.20311 10.2388 7.10348 10.1654 7.02986C10.0919 6.95623 9.9919 6.91482 9.88787 6.91482H6.95516V5.06502C6.95516 4.17594 7.16703 3.7246 8.32519 3.7246L10.0051 3.72399C10.2216 3.72399 10.397 3.54834 10.397 3.33187V0.396127C10.397 0.179858 10.2218 0.00440141 10.0055 0.00400128Z"
                      fill="#707070"
                    />
                  </svg>
                </li>
                <li className={style.icon}>
                  <svg
                    width="25"
                    height="20"
                    viewBox="0 0 25 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.75911 19.9998C8.74303 19.9998 7.69719 19.9175 6.64507 19.7526C4.792 19.4618 2.91615 18.4925 2.38535 18.2023L0.993164 17.4411L2.50044 16.9455C4.14807 16.4037 5.15035 16.0676 6.39105 15.5413C5.14874 14.9397 4.19128 13.8574 3.73038 12.4584L3.37974 11.394L3.66728 11.4379C3.39462 11.1631 3.17932 10.8841 3.01242 10.6305C2.41887 9.72893 2.10462 8.62734 2.17148 7.68332L2.23745 6.75418L2.79372 6.96966C2.55906 6.52651 2.38947 6.05325 2.2898 5.55722C2.04689 4.34753 2.25018 3.06237 2.86237 1.93855L3.34693 1.04903L3.99498 1.8274C6.04453 4.28945 8.64049 5.74993 11.7215 6.17748C11.5957 5.31001 11.69 4.47284 12.0021 3.72243C12.3655 2.84869 13.0119 2.10778 13.8709 1.57966C14.825 0.993279 15.982 0.709141 17.1287 0.779593C18.3454 0.854347 19.4501 1.31022 20.3274 2.09881C20.7558 1.98749 21.0715 1.86864 21.4982 1.70801C21.7549 1.61139 22.046 1.50168 22.4103 1.37619L23.7526 0.913684L22.8773 3.41373C22.935 3.40889 22.9945 3.40477 23.0567 3.40208L24.4901 3.33719L23.6429 4.49507C23.5943 4.5614 23.582 4.58022 23.5648 4.60621C23.4965 4.70911 23.4115 4.83711 22.2486 6.38991C21.9575 6.77874 21.8121 7.28517 21.8391 7.81616C21.9422 9.83398 21.6947 11.6596 21.1029 13.2422C20.5432 14.7394 19.6759 16.024 18.5254 17.0604C17.1017 18.3425 15.2862 19.2204 13.1293 19.6692C12.0713 19.8894 10.9351 19.9998 9.75911 19.9998Z"
                      fill="#707070"
                    />
                  </svg>
                </li>
                <li className={style.icon}>
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.40263 6.94824H1.53351C1.3618 6.94824 1.22266 7.08744 1.22266 7.2591V19.6889C1.22266 19.8606 1.3618 19.9998 1.53351 19.9998H5.40263C5.57435 19.9998 5.71349 19.8606 5.71349 19.6889V7.2591C5.71349 7.08744 5.57435 6.94824 5.40263 6.94824Z"
                      fill="#707070"
                    />
                    <path
                      d="M3.4694 0.769043C2.06158 0.769043 0.91626 1.91312 0.91626 3.31938C0.91626 4.72626 2.06158 5.87078 3.4694 5.87078C4.87609 5.87078 6.02048 4.7262 6.02048 3.31938C6.02054 1.91312 4.87609 0.769043 3.4694 0.769043Z"
                      fill="#707070"
                    />
                    <path
                      d="M15.2439 6.63965C13.6899 6.63965 12.5412 7.30768 11.8444 8.06673V7.25944C11.8444 7.08778 11.7053 6.94858 11.5336 6.94858H7.82819C7.65647 6.94858 7.51733 7.08778 7.51733 7.25944V19.6893C7.51733 19.861 7.65647 20.0001 7.82819 20.0001H11.6889C11.8606 20.0001 11.9997 19.861 11.9997 19.6893V13.5394C11.9997 11.467 12.5626 10.6597 14.0072 10.6597C15.5805 10.6597 15.7056 11.9539 15.7056 13.646V19.6893C15.7056 19.861 15.8447 20.0002 16.0164 20.0002H19.8785C20.0502 20.0002 20.1894 19.861 20.1894 19.6893V12.8713C20.1894 9.78982 19.6018 6.63965 15.2439 6.63965Z"
                      fill="#707070"
                    />
                  </svg>
                </li>
                <li className={style.icon}>
                  <svg
                    width="26"
                    height="17"
                    viewBox="0 0 26 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.7709 3.05235H16.4893V1.49158H22.7709V3.05235ZM13.1693 9.44927C13.5739 10.0777 13.777 10.8416 13.777 11.7347C13.777 12.6616 13.5485 13.4908 13.0839 14.2239C12.7885 14.7093 12.4209 15.1193 11.9801 15.4485C11.4832 15.83 10.8955 16.0931 10.2201 16.2339C9.54163 16.3747 8.80855 16.4431 8.01855 16.4431H0.993164V0.846191H8.52547C10.4239 0.876191 11.7701 1.42619 12.5647 2.50773C13.0416 3.17004 13.2778 3.96465 13.2778 4.8885C13.2778 5.84311 13.0378 6.60542 12.557 7.18465C12.2893 7.51004 11.8939 7.80619 11.3693 8.07234C12.1639 8.36388 12.7662 8.82004 13.1693 9.44927ZM4.59009 6.99542H7.89086C8.56932 6.99542 9.11778 6.86542 9.53932 6.6085C9.96163 6.35081 10.1724 5.89311 10.1724 5.23619C10.1724 4.51158 9.89393 4.03004 9.3347 3.7985C8.85393 3.63696 8.23932 3.55388 7.49393 3.55388H4.59009V6.99542ZM10.4901 11.5116C10.4901 10.7016 10.1585 10.1423 9.49778 9.84081C9.12855 9.67081 8.60701 9.58234 7.93855 9.57619H4.59009V13.7323H7.88547C8.56316 13.7323 9.08701 13.6447 9.46547 13.4585C10.1478 13.12 10.4901 12.4731 10.4901 11.5116ZM25.1009 8.97465C25.1778 9.48542 25.2124 10.2254 25.197 11.1931H17.0632C17.1085 12.3162 17.4955 13.1008 18.2316 13.55C18.6739 13.8316 19.2116 13.9693 19.8416 13.9693C20.5055 13.9693 21.0462 13.8016 21.4624 13.457C21.6893 13.2739 21.8893 13.0154 22.0616 12.6908H25.0439C24.9647 13.3531 24.607 14.0247 23.9609 14.71C22.9616 15.7947 21.5601 16.3416 19.7601 16.3416C18.2716 16.3416 16.9616 15.88 15.8239 14.9654C14.6893 14.0485 14.1201 12.557 14.1201 10.4908C14.1201 8.55311 14.6324 7.0685 15.6585 6.03696C16.6878 5.00235 18.0162 4.48773 19.6547 4.48773C20.6255 4.48773 21.5009 4.66081 22.2824 5.00927C23.0609 5.35927 23.7039 5.9085 24.2101 6.66388C24.6678 7.32927 24.9632 8.0985 25.1009 8.97465ZM22.1647 9.26619C22.1116 8.49004 21.8516 7.90234 21.3839 7.50081C20.9201 7.09696 20.3424 6.89542 19.6532 6.89542C18.9009 6.89542 18.3232 7.11081 17.9093 7.53542C17.4947 7.96081 17.237 8.53619 17.1309 9.26619H22.1647Z"
                      fill="#707070"
                    />
                  </svg>
                </li>
              </ul>
              <span className={style.list}>@ 2022 by alper bayram</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
