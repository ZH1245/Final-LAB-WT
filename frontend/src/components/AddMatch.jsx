import React from "react";
import { useState, useEffect } from "react";
import {
  Layout,
  Input,
  Form,
  Select,
  Radio,
  InputNumber,
  DatePicker,
  Button,
  Checkbox,
  AutoComplete,
} from "antd";
import axios from "axios";
import Text from "antd/lib/typography/Text";

const { Content, Header, Footer } = Layout;
const { Option } = Select;
const teamA = [
  "Karachi Kings",
  "Multan Sultans",
  "Peshawar Zalmi",
  "LahoreQalanders",
  "Islamabad United",
  "Quetta Gladiators",
];
const teamB = [
  "Karachi Kings",
  "Multan Sultans",
  "Peshawar Zalmi",
  "LahoreQalanders",
  "Islamabad United",
  "Quetta Gladiators",
];
const city = ["Karachi", "Multan", "Peshawar", "Lahore", "Islamabad", "Quetta"];
function AddMatch() {
  //   const [teamB, setteamB] = React.useState([]);
  //   const [teamA, setteamA] = React.useState([]);
  const [sensors, setCity] = useState([]);

  function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {}, []);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const handleFinish = (e) => {
    console.log("VALUES OF FORM", e);
    axios({
      method: "post",
      url: "http://localhost:4000/match/create/",
      headers: "x-auth-token",
      data: {
        teamA: e.teamA,
        teamB: e.teamB,
        city: e.city,
        date: e.date,
      },
    })
      .then((resp) => console.log(resp))
      .catch((e) => console.log(e));
  };
  const cityOptions = city.map((item) => {
    return { value: item, key: item };
  });
  //   const teamAOption = teamA.map((item) => {
  //     return { value: item, key: item };
  //   });
  //   const teamBOptions = teamB.map((item) => {
  //     return { value: item, key: item };
  //   });

  return (
    <div style={{ margin: "0 auto", width: "50%" }}>
      <Form
        layout="horizontal"
        onFinish={handleFinish}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="City"
          name="city"
          rules={[
            {
              required: true,
              message: "Please Select Brand of Phone!",
            },
          ]}
        >
          <Select
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
          >
            {city.map((item) => {
              return <Option key={item}>{item}</Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="TeamA"
          name="teamA"
          rules={[
            {
              required: true,
              message: "Please Tell US About the phone having 4G?",
            },
          ]}
        >
          <Select
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            // onSelect={handleSelect}
          >
            {teamA.map((item) => {
              return <Option key={item}>{item}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="TeamB"
          name="teamB"
          rules={[
            {
              required: true,
              message: "Please Tell US About the phone having 4G?",
            },
          ]}
        >
          <Select
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
          >
            {teamB.map((item) => {
              return <Option key={item}>{item}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Date"
          name="date"
          rules={[
            {
              required: true,
              message: "Please Select Release Date!",
            },
          ]}
        >
          <DatePicker></DatePicker>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddMatch;
