import React from 'react';
import { Button, Col, Row, Image } from 'react-bootstrap';
import style from './style.module.css';
function Download() {
  return (
    <div className={style.back}>
      <div className="container-xl pt-5 ">
        <Row className="align-items-center">
          <Col sm={12} md={6}>
            <div className="d-flex pb-5">
              <span className={style.rectangle}></span>
              <span className={style.donwheader}>
                Download app for Exciting Deals
              </span>
            </div>
            <div className="text-center">
              <p className={style.downtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
                adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
                donec vestibulum tristique leo bibendum in a, tincidunt.{' '}
              </p>
              <span className='align-items-center' sm={12} >
                <button className={style.btn}>
                  <div className="d-flex align-items-center">
                    <div>
                      <svg
                        width="32"
                        height="34"
                        viewBox="0 0 32 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.51467 0.433303C4.63876 -0.0939679 3.59484 -0.141117 2.68441 0.297833L17.9494 15.5953L22.9405 10.5809L5.51467 0.433303ZM1.28189 1.71363C1.08931 2.12137 0.985718 2.57493 0.985718 3.04177V31.0243C0.985718 31.4931 1.08998 31.9401 1.28455 32.3392L16.5435 17.0078L1.28189 1.71363ZM17.9514 18.4183L2.71104 33.731C3.11545 33.9183 3.54577 34 3.97542 34C4.50601 34 5.03528 33.8732 5.51473 33.585L22.9439 23.422L17.9514 18.4183ZM29.5773 14.4458C29.5713 14.4418 29.5647 14.4379 29.5587 14.4345L24.7203 11.6169L19.3566 17.0058L24.7236 22.3841C24.7236 22.3841 29.5713 19.5578 29.5773 19.5545C30.4771 19.008 31.0143 18.053 31.0143 16.9998C31.0143 15.9466 30.4771 14.9917 29.5773 14.4458Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="row">
                      <span className={style.dwnbtn1}>GET IT ON</span>
                      <span className={style.dwnbtn2}>Google Play</span>
                    </div>
                  </div>
                </button>
                <button className={style.btn}>
                  <div className="d-flex align-items-center">
                    <div >
                      <svg
                        width="28"
                        height="34"
                        viewBox="0 0 28 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.30209 33.9999C4.24187 33.9707 0.0561523 23.6411 0.0561523 18.3804C0.0561523 9.78721 6.50254 7.90592 8.98693 7.90592C10.1065 7.90592 11.3021 8.3456 12.3565 8.73467C13.0939 9.00607 13.8565 9.28624 14.2806 9.28624C14.5345 9.28624 15.1328 9.04791 15.661 8.8388C16.7874 8.39036 18.1891 7.83301 19.8214 7.83301C19.8243 7.83301 19.8282 7.83301 19.8311 7.83301C21.0499 7.83301 24.7454 8.10049 26.9672 11.437L27.4876 12.2191L26.7386 12.7843C25.6686 13.5916 23.7162 15.0644 23.7162 17.9817C23.7162 21.4369 25.9273 22.7656 26.9895 23.4047C27.4584 23.6868 27.9438 23.9777 27.9438 24.6139C27.9438 25.0292 24.6287 33.9483 19.8145 33.9483C18.6366 33.9483 17.8039 33.5942 17.0694 33.282C16.3263 32.9658 15.6852 32.6935 14.6259 32.6935C14.0889 32.6935 13.4099 32.9474 12.6911 33.2169C11.7087 33.5835 10.5968 33.9999 9.33516 33.9999H9.30209Z"
                          fill="white"
                        />
                        <path
                          d="M20.3314 0C20.4568 4.52067 17.2238 7.65691 13.9946 7.46021C13.4624 3.85256 17.2234 0 20.3314 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="row">
                      <span className={style.dwnbtn1}>GET IT ON</span>
                      <span className={style.dwnbtn2}>App Store</span>
                    </div>
                  </div>
                </button>
              </span>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <img src="./img/mrl3.png" alt="food" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Download;
