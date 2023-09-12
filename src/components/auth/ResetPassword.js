import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Form, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import logo from "assets/undrawDeliveries.svg";
import { RESET_PASSWORD } from "redux/actions/session";
import "./auth.scss";
import { passwordPattern } from "../../constants";
import padlock from "assets/icons/padlock.svg";
import Input from "components/form/Input";

const { Text } = Typography;

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });

  const { loading, error } = useSelector(
    ({ auth: { forgotPassword } }) => forgotPassword
  );

  const handleInput = (label, value) => {
    setForm({
      ...form,
      [label]: value,
    });
  };

  const doesPasswordMatch = () => {
    return form.password === form.confirmPassword;
  };

  const onFinish = async () => {
    const { password } = form;
    dispatch({
      type: RESET_PASSWORD,
      payload: {
        password,
        resetKey: token,
      },
    });
  };

  return (
    <div className="login">
      <Helmet title="Reset Password" />
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
          <p className="title">Create a new password</p>
          <p className="description">
            Your new password must be different from previous used passwords.
          </p>
          {error && <Text type="danger">{error}</Text>}
          <Form onFinish={onFinish} layout="vertical" requiredMark={false}>
            <Input
              label="Password"
              size="large"
              name="password"
              type="password"
              placeholder="6 + characters, 1 Capital letter"
              value={form.password}
              onChange={({ target: { value } }) =>
                handleInput("password", value)
              }
              suffix={<img src={padlock} alt="at" />}
              hasFeedback
              rules={[
                { required: true, message: "Password is required" },
                {
                  pattern: passwordPattern,
                  message: "6 + characters, 1 Capital letter",
                },
              ]}
            />
            <Input
              label="Confirm password"
              size="large"
              name="confirmPassword"
              placeholder="should match password"
              type="password"
              value={form.confirmPassword}
              onChange={({ target: { value } }) =>
                handleInput("confirmPassword", value)
              }
              suffix={<img src={padlock} alt="at" />}
              formItemProps={{
                validateStatus: doesPasswordMatch() ? "success" : "error",
                help: doesPasswordMatch() ? "" : "Both  password must match",
              }}
            />
            <Button
              htmlType="submit"
              className="w-100 my-3"
              type="primary"
              disabled={loading}
              loading={loading}
            >
              Reset password
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
