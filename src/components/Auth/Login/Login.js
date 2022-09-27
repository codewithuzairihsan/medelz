import React from "react";
import "../Login/LoginStyle.css";
import "antd/dist/antd.min.css";
import Header from "../Header";
import { Form, Checkbox, Button } from "antd";
import {
  Anchor,
  Container,
  InputEmail,
  InputPassword,
  LoginBackGround,
  ParentCheckBox,
  Row,
} from "./Login.style";
// import DashBoard from "../../../views/dashboard/DashBoard";
import HeroTitle from "../../heroTitle/HeroTitle";

function Login() {
  const handleBoard = () =>{
    // <DashBoard/>
  }
let subtitle = 'Lorem ipsum dolor sit amet consectetur.'
  return (
    <>
      <LoginBackGround>
        <Header />
        <HeroTitle title = 'Login' subtitle = {subtitle}/>
        <br />
        <Container>
          {/* <div className="container"> */}
          {/* <div className="form">
      <div className="form-control">
      <i class="fa-solid fa-user"></i>
        <input type="Email" placeholder='Email'/>
      </div>
      <div className="form-control">
      <i class="fa-solid fa-lock"></i>
        <input type="Password"  placeholder='Password'/>
      </div>
    </div> */}
          <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Row>
              <Form.Item
                // name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <i className="fa-solid fa-user"></i>
          
                <InputEmail type="email" placeholder="Email" />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                // name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <i className="fa-solid fa-lock"></i>
                <InputPassword type="password" placeholder="Password" />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                // name="remember"
                valuePropName="checked"
                wrapperCol={{ span: 16 }}
              >
                <ParentCheckBox>
                  <Checkbox>Remember me</Checkbox>
                {/* <a href="/" style={{float: 'right'}}> <em> Forgot Password</em></a> */}
                <Anchor> <em> Forgot Password </em></Anchor>
                </ParentCheckBox>
              </Form.Item>
            </Row>
            <Row>
              <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                {/* <StyledButton> */}
                <Button type="primary" htmlType="submit" onClick={handleBoard} >
                  Submit
                </Button>
                {/* </StyledButton> */}
              </Form.Item>
            </Row>
          </Form>
        </Container>
      </LoginBackGround>
    </>
  );
}

export default Login;
