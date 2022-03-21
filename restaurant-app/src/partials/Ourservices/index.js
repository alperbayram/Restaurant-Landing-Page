import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import style from './style.module.css';

function Services() {
  return (
    <div className={style.services}>
      <div className="container-xl pt-5" >
        <Row>
          <Col xs={12} md={5}>
            <div className="d-flex">
              <span className={style.rectangle}></span>
              <p className={style.serviceItem}>Our Services</p>
            </div>
          </Col>
          <Col>
            <span className={style.serviceItem2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
              adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
              donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
              metus id amet, nam hac magna accumsan. Nascetur ac tortor purus
              ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Est, adipiscing cursus auctor eget sed.
            </span>
          </Col>
        </Row>
        <Row className='align-items-center'>
          <Col xs={12} md={6} className="p-3">
            <Row className='align-items-center'>
              <Col xs={5} md={5}>
                <Image
                  src="./img/Table 1.png"
                  alt="food"
                  className="img-fluid"
                />
              </Col>
              <Col xs={7} md={7} >
                <span className={style.tabletitle}>Advanced Table Booking</span>
                <p className={style.tabledesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
            </Row>
            <Row className='align-items-center justify-content-center'>
              <Col xs={7} md={7}>
                <span className={style.tabletitle}>Food For Free 24/7</span>
                <p className={style.tabledesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
              <Col xs={5} md={5}>
                <Image
                  src="./img/Table 2.png"
                  alt="food"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center p-3">
            <Image
              src="./img/Table 3.png"
              alt="food"
              className="img-fluid"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Services;
