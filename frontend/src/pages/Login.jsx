import { React, useState, useEffect } from "react";
// import MyLayout from './MyLayout'
import { useHistory } from "react-router-dom";
import "antd/dist/antd.less";
import NavigationBar from "../components/NavigationBar";
import { Layout, Form, Input, Button, Typography, Alert } from "antd";
import axios from "axios";

import { saveToken } from "../utils/AuthUtil";

import { useContext } from "react";
import decode from "jwt-decode";
import { UserContext, UserProviderContext } from "../context/UserContext";

// const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const styles = {
  inputBox: {
    maxWidth: 450,
  },
};

function Login({ dispatch }) {
  const history = useHistory();
  const [formLayout, setFormLayout] = useState("horizontal");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const setUserDetails = useContext(UserProviderContext);
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  const [form] = Form.useForm();
  const handleFinish = async (e) => {
    setLoading(true);
    try {
      await axios
        .post("http://localhost:4000/user/login", {
          password: e.password,
          email: e.email,
        })
        .then((response) => {
          console.log(response.data);
          saveToken(response.data);
          console.log(decode(response.data).role);
          setUserDetails({
            loggedIn: true,
            role: decode(response.data).role,
            AuthToken: response.data,
          });
          // saveToken(response.data.data);
          setAlert(true);
          setTimeout(() => {
            history.goBack();
            setAlert(false);
          }, 1100);
        });
    } catch (e) {
      console.log("e is", e);
      setAlert(true);
    }

    setLoading(false);
  };

  return (
    <div>
      <NavigationBar />
      <div
        style={{
          margin: "10px auto",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        {/* <Button
          type="link"
          onClick={() => {
            history.push("/");
          }}
        >
          Back To Home
        </Button> */}
        {alert == true ? (
          <Alert message="Login Success" type="success" showIcon />
        ) : (
          <br />
        )}
        <Title strong level={2} type="success" underline>
          Login
        </Title>
        <div
          style={{
            // width: 600,
            // border: "2px solid red",
            margin: "0 auto",
            padding: 10,
          }}
        >
          <Form
            // style={{ border: "2px solid red" }}
            autoComplete
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{
              layout: formLayout,
            }}
            onFinish={handleFinish}
          >
            {/* <Row>
          <Col> */}
            <Form.Item
              style={{ textAlign: "right" }}
              //   labelAlign="left"
              name="email"
              label="Email: "
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
                { type: "email", message: "Must be Valid E-Mail" },
              ]}
            >
              <Input
                inputMode="email"
                placeholder="Enter your Email"
                size="middle"
                style={styles.inputBox}
              />
            </Form.Item>
            {/* </Col>
        </Row>
        <Row>
          <Col> */}
            <Form.Item
              style={{ textAlign: "right" }}
              name="password"
              label="Password: "
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
                { min: 8, message: "Password must be atleast 8 characters" },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                size="middle"
                // style={{ width: "400px" }}
                style={styles.inputBox}
              />
            </Form.Item>
            {/* </Col>
        </Row> */}
            {/* <Form.Item> */}
            <Button type="primary" htmlType="submit" loading={loading}>
              Login
            </Button>
            {/* </Form.Item> */}
          </Form>
        </div>

        {/* <Button
          type="primary"
          onClick={() => {
            history.push("/signup");
          }}
        >
          SignUp
        </Button> */}
      </div>
    </div>
  );
}

export default Login;
