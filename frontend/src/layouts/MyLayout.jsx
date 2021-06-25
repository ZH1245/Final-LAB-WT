import axios from "axios";
import "antd/dist/antd.css";
import NavigationBar from "../components/NavigationBar";
import { React, useContext } from "react";
import { Layout, Menu, Input, Typography, Button } from "antd";
import { UserContext, UserProviderContext } from "../context/UserContext";

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
// import client from "../api/client";

const { Header, Content, Footer, Sider } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const { SubMenu } = Menu;
const styles = {
  border: { border: "2px solid red" },
};
const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
// const brands = ["nokia", "samsung", "xioami"];
function MyLayout(props) {
  const history = useHistory();
  const userDetails = useContext(UserContext);
  const setUserDetails = useContext(UserProviderContext);
  const [isloading, setisloading] = useState(true);
  const [brands, setbrands] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get("http://localhost:4000/match/get")
      .then((resp) => {
        // console.log(resp.data.data);
        setbrands(resp.data);
        // console.log(brands);
      })
      .catch((e) => {
        console.log(e);
      });
    setisloading(false);
  };
  return (
    // <React.Fragment>
    <Layout className="layout">
      {/* <Header theme="dark" hasSider={true}> */}
      <NavigationBar />
      <Layout>
        <Sider width={200} classNameName="site-layout-background">
          <Menu
            key="menu"
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
          >
            {userDetails.role == "admin" ? (
              <Menu.Item
                key="addmatch"
                danger
                onClick={() => {
                  history.push("/addMatch");
                }}
              >
                Add Match
              </Menu.Item>
            ) : (
              <div />
            )}
          </Menu>
        </Sider>
        <Content style={{ display: "inline", margin: 15 }}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default MyLayout;
