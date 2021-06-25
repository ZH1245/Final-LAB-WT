import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Button, Input, Anchor, Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { delToken, getToken } from "../utils/AuthUtil";
import { useContext } from "react";
import { Alert } from "antd";
import { UserContext, UserProviderContext } from "../context/UserContext";

// import store from "../redux/store";
import jwtDecode from "jwt-decode";
// const logo = require("../assets/logo.jpg");
const { Link } = Anchor;

const styles = {
  navButtons: {
    width: 100,
  },
};
function NavigationBar() {
  const history = useHistory();
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserProviderContext);
  const [alert, setAlert] = useState(false);

  // console.log(store.getState());
  const handleLogout = () => {
    delToken();
    setUserDetails({ loggedIn: false, AuthToken: "", role: "" });

    setAlert(true);
    setTimeout(() => {
      setAlert(false);
      history.push("/");
    }, 1100);
  };
  return (
    <Navbar
      key="navbar"
      bg="light"
      expand="lg"
      style={{
        padding: "5px",
        // justifyContent: "space-between",
      }}
    >
      <Navbar.Brand key="brand">
        <div className="logo">
          <Typography.Text
            onClick={() => {
              history.push("/");
            }}
          >
            PSL Matches
          </Typography.Text>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" key="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        {userDetails.loggedIn ? (
          <div
            key="loggedIn"
            style={{
              //   display: "inline",
              //   float: "right",
              margin: 0,
              marginRight: "auto",
              marginLeft: 0,
              textAlign: "center",
            }}
          >
            <div style={{ margin: 5, display: "inline" }}>
              <Avatar icon={<UserOutlined />} style={{ margin: 6 }}></Avatar>
              <Typography.Text strong>
                {jwtDecode(getToken()).firstName}
              </Typography.Text>
            </div>
            <Button
              style={styles.navButtons}
              onClick={() => handleLogout()}
              // style={{ width: "100px" }}
            >
              LogOut
            </Button>
            {/* {userDetails.role == "admin" ? (
              <Button
                danger
                onClick={() => {
                  history.push("/addMobile");
                }}
              >
                ADD
              </Button>
            ) : (
              <div />
            )} */}
          </div>
        ) : (
          <div
            key="notLoggedIn"
            style={{
              display: "inline",
              float: "right",
              marginRight: "auto",
              marginLeft: 0,
              textAlign: "center",
            }}
          >
            <Button
              //   type="primary"
              onClick={() => history.push("/login")}
              style={styles.navButtons}
              // style={{ width: "100px" }}
            >
              Login
            </Button>
            <Button
              style={styles.navButtons}
              type="secondary"
              danger
              onClick={() => history.push("/signup")}
              // style={{ width: "100px" }}
            >
              SignUp
            </Button>
          </div>
        )}
      </Navbar.Collapse>
      {alert == true ? (
        <Alert message="Logged out SuccessFully" type="success" showIcon />
      ) : (
        <br />
      )}
    </Navbar>
  );
}

export default NavigationBar;
