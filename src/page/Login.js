import React, { Component } from "react";
import "../css/style.css";
import img1 from "../assets/image1.jpg";
import { Col, Container, Navbar, Row } from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Container className="login">
        <h1>Learn-TOEFL</h1>

        <Row style={{marginTop:'20px'}}>
          <Col>
            <h2>
              Get Work Done Faster<br />
              and Better With Us
            </h2>
          </Col>
          <Col>
            <Row>
                    
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
