import React from 'react';
import { Card, Col, Row, Stack, Image } from 'react-bootstrap';
import style from './style.module.css';
function FoodItem() {
  return (
    <div className={style.foodback} id="foodıtem">
      <div className="container-xl">
        <Stack gap={3}>
          <Row>
            <Col xs={12} md={6}>
              <div className="d-flex">
                <span className={style.rectangle}></span>
                <span className={style.foodItem}>
                  Some Top Restaurant For Dining In Or Take Away!
                </span>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <span className={style.foodItem2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
                adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
                donec vestibulum tristique leo bibendum in a, tincidunt.
                Volutpat metus id amet, nam hac magna accumsan. Nascetur ac
                tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Est, adipiscing cursus auctor eget
                sed.
              </span>
            </Col>
          </Row>
          <Row className="pt-5 pb-5">
            <Col xs={12} md={4} className="mb-5">
              <Card className="border-0 d-flex align-content-center bg-transparent mb-5">
                <Image
                  src="./img/Rectangle7.png"
                  alt="food"
                  className="img-fluid p-0"
                />
                <div className={style.cardtitle}>
                  <span className={style.cardhead}>Card Title</span>
                  <p className={style.carddesc}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-between ">
                    <div className="d-flex justify-content-center align-items-center">
                      <span className={style.carddesc}>New Market</span>
                    </div>
                    <div className={style.mark}>
                      <span>Book Now</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={4} className="mb-5">
              <Card className="border-0 d-flex align-content-center bg-transparent mb-3">
                <Image
                  src="./img/Rectangle8.png"
                  alt="food"
                  className="img-fluid p-0"
                />
                <div className={style.cardtitle}>
                  <span className={style.cardhead}>Card Title</span>
                  <p className={style.carddesc}>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-center align-items-center">
                      <span className={style.carddesc}>New Market</span>
                    </div>
                    <div className={style.mark}>
                      <span>Book Now</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col
              xs={12}
              md={4}
              className="d-flex justify-content-center align-items-center mt-5"
            >
              <div className="pb-2 pt-2">
                <div>
                  <span>
                    <svg
                      width="72"
                      height="3"
                      viewBox="0 0 72 3"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="1.31134e-07"
                        y1="1.5"
                        x2="72"
                        y2="1.50001"
                        stroke="#35CD8C"
                        stroke-width="3"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="#35cd8c"
                      class="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />
                    </svg>
                  </span>
                </div>
                <span className={style.more}>See  More</span>
              </div>
            </Col>
          </Row>
        </Stack>
      </div>
    </div>
  );
}

export default FoodItem;
