import React from 'react';
import { Col, Row, Image, Card, Button, Stack } from 'react-bootstrap';
import style from './styles.module.css';
const foods = [
  {
    img: './img/foods/food1.png',
    header: 'Hand Sandwich',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
    price: '$10.25',
  },
  {
    img: './img/foods/food2.png',
    header: 'Hand Sandwich',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
    price: '$10.25',
  },
  {
    img: './img/foods/food3.png',
    header: 'Hand Sandwich',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
    price: '$10.25',
  },
  {
    img: './img/foods/food4.png',
    header: 'Hand Sandwich',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
    price: '$10.25',
  },
  {
    img: './img/foods/food5.png',
    header: 'Hand Sandwich',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
    price: '$10.25',
  },
  {
    img: './img/foods/food6.png',
    header: 'Hand Sandwich',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing. ',
    price: '$10.25',
  },
];

function Foods() {
  return (
    <div>
      <div className="container-xl pt-5 ">
        <div className="p-5">
          <Stack className="align-items-center">
            <span className={style.foodsheader}>Explore Our Foods</span>
            <b className={style.foodstitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
              adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
              donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
              metus id amet.
            </b>
          </Stack>
        </div>
        <Row>
          {foods.map((food) => (
            <Col xs={12} md={6} lg={4}>
              <div className={style.card}>
                <Card.Img variant="top" src={food.img} />
                <div className=" m-3">
                  <div className='d-flex justify-content-between'>
                    <span className={style.cardheader}>{food.header}</span>
                    <p className={style.cardprice}>{food.price}</p>
                  </div>
                  <p className={style.carddesc}>{food.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Foods;
