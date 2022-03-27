import React from 'react';
import { Col, Row, Stack } from 'react-bootstrap';
import Calendar from '../../components/Calendar';
import Time from '../../components/Time';
import style from './style.module.css';

function Booking() {
  return (
    <div className={style.booking} id='booking'>
      <div className={style.bookcontainer}>
        <Stack gap={5} className="align-items-center justify-content-center">
          <span className={style.bookingheader}>advance booking</span>
          <form className={style.bookingform}>
            <input
              type="text"
              placeholder="Search Restaurant"
            />
            <button className={style.bookingbtn}>Go</button>
          </form>
          <div>
            <Row>
              <Col>
                <span>
                  Date{' '}
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0H0L5.2 7L10 0Z" fill="#35CD8C" />
                  </svg>
                </span>
                <p>
                  <Calendar></Calendar>
                </p>
              </Col>
              <Col>
                <span>
                  Time{' '}
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0H0L5.2 7L10 0Z" fill="#35CD8C" />
                  </svg>
                </span>
                <p>
                  <Time></Time>
                </p>
              </Col>
              <Col>
                <span>
                  Guests{' '}
                  <svg
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 0H0L5.2 7L10 0Z" fill="#35CD8C" />
                  </svg>
                </span>
                <p>3 People</p>
              </Col>
            </Row>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Booking;
