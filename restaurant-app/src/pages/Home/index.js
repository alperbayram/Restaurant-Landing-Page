import React from 'react';
import { Card, Col, Container, Image, Row, Form, Stack } from 'react-bootstrap';
import food from '../../img/—Pngtree—delicious food_568171 1.png';
import style from './style.module.css';

function Home() {
  return (
    <div className={style.home}>
      <Container>
        <Row>
          <Col>
            <Card className="border-0 d-flex align-content-center bg-transparent">
              <div>
                <h1 className={style.header}>Food</h1>
                <p>Discover Restaurant and Delicious Food</p>
                <Form.Control size="lg" type="text" placeholder="Large text" />
              </div>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 text-center bg-transparent">
              <div>
                <Image
                  src={food}
                  alt="food"
                  className="img-thumbnail border-0 bg-transparent"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Stack gap={3}>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}

export default Home;
