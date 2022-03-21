import React from 'react';
import { Container, Stack, Col, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <Image></Image>
      <Container>
        <Stack>
          <Col>
            <span>Get notified about new amazing products</span>
          </Col>
          <Col>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
              adipiscing cursus auctor eget sed phasellus senectus.
            </span>
          </Col>
          <Col>
            <Form.Control size="lg" type="text" placeholder="Large text" />
          </Col>
          <Col>
            <span>Product</span>
            <span>Company</span>
            <span>Learn more</span>
            <span>Get in touch</span>
          </Col>
        </Stack>
        <div>
          <span>
            <Link to="/">a</Link>
            <Link to="/">b</Link>
            <Link to="/">c</Link>
            <Link to="/">d</Link>
          </span>
          <span>@ 2020 Expice Studio</span>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
