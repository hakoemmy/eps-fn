import React from "react";
import { Helmet } from "react-helmet";
import { Button, Form, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FORGOT_PASSWORD } from "redux/actions/session";
import logo from "assets/undrawDeliveries.svg";
import openMail from "assets/icons/open-mail.svg";
import "./auth.scss";
import at from "assets/icons/at.svg";
import Input from "components/form/Input";

const { Text } = Typography;

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { loading, error, step } = useSelector(
    ({ auth: { forgotPassword } }) => forgotPassword
  );

  const onFinish = async (form) => {
    dispatch({ type: FORGOT_PASSWORD, payload: form });
  };

  return (
    <div className="login">
      <Helmet title="Forgot Password" />
      <div className="row-login row">
        <div className="login-left-container">
          <div className="">
            <p className="title">Fleetcon</p>
            <p className="description">
              Maximizing profitability by giving insight into what happens at
              every point in the operation
            </p>
          </div>
          <img className="logo w-100" src={logo} alt="logo" />
        </div>
        <div className="login-right-container">
          {step === 1 && (
            <>
              <p className="title">Reset password</p>
              <p className="description">
                Enter the email associated with your account and we’ll send an
                email with instructions to reset your password
              </p>
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
                <Button
                  htmlType="submit"
                  className="w-100 my-3"
                  type="primary"
                  disabled={loading}
                  loading={loading}
                >
                  Send instructions
                </Button>
              </Form>
            </>
          )}
          {step === 2 && (
            <div className="open-mailer-container">
              <img src={openMail} alt="open-mail" />
              <p className="title">Check your email</p>
              <p className="description">
                we have sent a password recover instruction to your mail
              </p>
              <a
                href="mailto:"
                htmlType="submit"
                className="button w-100 my-3"
                type="primary"
              >
                Open mailer
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
