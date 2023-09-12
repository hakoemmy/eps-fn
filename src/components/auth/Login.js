import React from "react";
import { LOGIN } from "redux/actions/session";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button, Typography, Form } from "antd";
import logo from "assets/undrawDeliveries.svg";
import "./auth.scss";
import at from "assets/icons/at.svg";
import padlock from "assets/icons/padlock.svg";
import Input from "components/form/Input";
import "./auth.scss";

const { Text } = Typography;

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(({ auth: { login } }) => login);

  const onFinish = async (form) => {
    dispatch({ type: LOGIN, payload: form });
  };
  return (
    <div className="login">
      <Helmet title="Login" />
      <div className="row-login row">
        <div className="login-left-container">
          <div className="">
            <p className="title">E-Procurement System</p>
            <p className="description">
            Review and bid on open tenders, grow with us.
            </p>
          </div>
          <img className="logo w-100" src={logo} alt="logo" />
        </div>
        <div className="login-right-container">
          <p className="title">EPS: E-Procurement System</p>
          {error && <Text type="danger">{error}</Text>}
          <Form onFinish={onFinish} layout="vertical" requiredMark={false}>
            <Input
              label="Email"
              size="large"
              name="email"
              placeholder="ex: example@email.com"
              suffix={<img src={at} alt="at" />}
              hasFeedback
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Email address is not valid" },
              ]}
            />
            <Input
              label="Password"
              size="large"
              name="password"
              type="password"
              placeholder="Enter your password"
              suffix={<img src={padlock} alt="at" />}
              rules={[{ required: true, message: "Password is required" }]}
              hasFeedback
            />
            <div className="mb-3 forgot-password">
             No account yet?,<Link to="/signup"> Register</Link>
            </div>
            <Button
              loading={loading}
              htmlType="submit"
              className="w-100 my-3"
              type="primary"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
