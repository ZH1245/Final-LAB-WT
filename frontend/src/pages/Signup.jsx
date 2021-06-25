import { useState, useEffect } from "react";
import { Form, Input, InputNumber, Button, Typography, Alert } from "antd";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";

const styles = {
  inputBox: { width: "400px" },
};
function Signup() {
  const [alert, setAlert] = useState(false);
  const [alertmsg, setAlertMsg] = useState("");
  const [alerttype, setType] = useState("success");
  const handleFinish = (e) => {
    // console.log(e);
    axios({
      method: "post",
      url: "http://localhost:4000/user/signup",
      data: {
        lastName: e.lastName,
        firstName: e.firstName,
        password: e.password,
        email: e.email,
      },
    })
      .then((resp) => {
        if (resp._id != null) {
          setAlert(true);
          setAlertMsg("SignUp Success");
          setType("success");
        }
        setTimeout(() => {
          history.goBack();
          setAlert(false);
        }, 1100);
      })
      .catch((e) => {
        setAlert(true);
        setType("warning");
        setAlertMsg("EMAIL ALREADY EXIST");
      });
  };
  const history = useHistory();

  useEffect(() => {}, []);
  return (
    <div>
      <NavigationBar key="signup" />
      <div style={{ width: 600, margin: "10px auto", textAlign: "center" }}>
        {alert ? (
          <Alert message={alertmsg} type={alerttype} showIcon />
        ) : (
          <br />
        )}

        <Typography.Title>SignUp</Typography.Title>
        <Form autoComplete onFinish={handleFinish}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                type: "string",
                message: "Please enter your firstName!",
              },
            ]}
          >
            <Input placeholder="Enter First Name" maxLength={10} />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                type: "string",
                message: "Please enter your lastName!",
              },
            ]}
          >
            <Input placeholder="Enter Last Name" style={styles.inputBox} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email: "
            rules={[
              {
                required: true,
                message: "Please input VAlID Email!",
              },
              { type: "email", message: "Must Be Valid E-Mail" },
            ]}
          >
            <Input placeholder="Enter Email" style={styles.inputBox}></Input>
          </Form.Item>
          <Form.Item
            name="password"
            label="Password: "
            rules={[
              {
                required: true,
                message: "Please input your PASSWORD!",
              },
              { min: 8, message: "Password must be atleast 8 Characters" },
            ]}
          >
            <Input.Password
              placeholder="Enter Password"
              style={styles.inputBox}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
        </Form>
        <br />
        <Button
          type="link"
          onClick={() => {
            history.goBack();
          }}
        >
          Back To Home
        </Button>
      </div>
    </div>
  );
}

export default Signup;
