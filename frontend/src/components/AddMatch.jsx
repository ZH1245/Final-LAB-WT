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
import client from "../api/client";

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
function NewMobile() {
  const [teamB, setteamB] = React.useState([]);
  const [teamA, setteamA] = React.useState([]);
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
    // const result = Cpu.filter((item) => {
    //   return e.cpu.toLowerCase().includes(item.name.toLowerCase());
    // })[0];
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
  const teamAOption = teamA.map((item) => {
    return { value: item, key: item };
  });
  const teamBOptions = teamB.map((item) => {
    return { value: item, key: item };
  });

  return (
    <div style={{ margin: "0 auto", width: "50%" }}>
      <Form
        layout="horizontal"
        onFinish={handleFinish}
        initialValues={{
          remember: true,
        }}
      >
        
        </Form.Item>
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
            {brands.map((item) => {
              return <Option key={item._id}>{item.name}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name="posterimage"
          label="Card image url"
          rules={[
            {
              required: true,
              message: "Please Enter The URL of image to be displayed on Card!",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          name="mobileImage"
          label="Mobile Component image url"
          rules={[
            {
              required: true,
              message:
                "Please Enter the URL of Image That will be displayed inside Specs!",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="4G"
          name="carriers_4g"
          rules={[
            {
              required: true,
              message: "Please Tell US About the phone having 4G?",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>YES</Radio>
            <Radio value={false}>NO</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="5G"
          name="carriers_5g:"
          rules={[
            {
              required: true,
              message: "Please Select Yes/No!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>YES</Radio>
            <Radio value={false}>NO</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Bluetooth"
          name="bluetooth"
          rules={[
            {
              required: true,
              message: "Please Select Yes/No!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>YES</Radio>
            <Radio value={false}>NO</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="WLAN"
          name="wlan"
          rules={[
            {
              required: true,
              message: "Please Select Yes/No!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>YES</Radio>
            <Radio value={false}>NO</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="SD Card Slot"
          name="card_slot"
          rules={[
            {
              required: true,
              message: "Please Specify SD Card Slot!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>YES</Radio>
            <Radio value={false}>NO</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="FrontFlash"
          name="fflash"
          rules={[
            {
              required: true,
              message: "Please Select Yes/No!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>YES</Radio>
            <Radio value={false}>NO</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="BackFlash"
          name="bflash"
          rules={[
            {
              required: true,
              message: "Please Select Yes/No!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value={true}>YES</Radio>
            <Radio value={false}>NO</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="sim_slot"
          label="Sim Slots"
          rules={[
            {
              required: true,
              message: "Please Select from below!",
            },
          ]}
        >
          <Select allowClear>
            <Option key={"Single-Sim"}>{"Single-Sim"}</Option>
            <Option key={"Multi-Sim"}>{"Multi-Sim"}</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Enter MegaPixels of Back Camera"
          name="backCamera"
          rules={[
            {
              required: true,
              message: "Please Enter Total MegaPixels of Phone!",
            },
          ]}
        >
          <InputNumber></InputNumber>
          {/* <Select
            allowClear
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
          >
            {camera.map((item) => {
              return (
                <Option
                  key={item._id}
                >{`${item.MP}MP, Focal=  ${item.focal}mm`}</Option>
              );
            })}
          </Select> */}
        </Form.Item>
        <Form.Item
          label="Enter MegaPixels of Front Camera"
          name="frontCamera"
          rules={[
            {
              required: true,
              message: "Please Enter Total MegaPixels of Mobile!",
            },
          ]}
        >
          <InputNumber></InputNumber>
          {/* <Select
            allowClear
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
          >
            {camera.map((item) => {
              return (
                <Option
                  key={item._id}
                >{`${item.MP}MP, Focal=  ${item.focal}mm`}</Option>
              );
            })}
          </Select> */}
        </Form.Item>

        <Form.Item
          label="Weight"
          name="weight"
          rules={[
            {
              required: true,
              message: "Please input weight of Phone in Grams!",
            },
          ]}
        >
          <InputNumber></InputNumber>
        </Form.Item>
        <Form.Item
          label="OS"
          name="OS"
          rules={[
            {
              required: true,
              message: "Please Enter OS!",
            },
          ]}
        >
          <Input></Input>
        </Form.Item>
        <Form.Item
          label="Sensors"
          name="sensor"
          rules={[
            {
              required: true,
              message: "Please Select Atleast one Sensors!",
            },
          ]}
        >
          <Select
            allowClear
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
          >
            {sensors.map((item) => {
              return <Option key={item._id}>{item.name}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="CPU"
          name="cpu"
          rules={[
            {
              required: true,
              message: "Please Select CPU!",
            },
          ]}
        >
          {/* <Select
            // mode=""
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            // defaultValue={["a10", "c12"]}
            onChange={handleChange}
          > */}
          <AutoComplete
            options={cpuOptions}
            // onChange={(e) => console.log(`ONCHANGE OF AUTOCOM` + e)}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          >
            {/* {Cpu.map((item) => {
              return (
                <Option
                  key={item._id}
                >{`${item.manufacturer} ${item.name}`}</Option>
              );
            })} */}
          </AutoComplete>
          {/* </Select> */}
          {/* <Text>Not Found? Create One</Text>
          <Input placeholder="" /> */}
        </Form.Item>
        <Form.Item
          label="ROM"
          name="storage"
          rules={[
            {
              required: true,
              message: "Please enter Storage Size in GB's!",
            },
          ]}
        >
          <InputNumber></InputNumber>
        </Form.Item>
        <Form.Item
          label="RAM"
          name="RAM"
          rules={[
            {
              required: true,
              message: "Please enter Amount Of RAM in GB's!",
            },
          ]}
        >
          <InputNumber></InputNumber>
        </Form.Item>
        <Form.Item
          label="Screen Size"
          name="screenSize"
          rules={[
            {
              required: true,
              message: "Please enter Screen Size!",
            },
          ]}
        >
          <InputNumber></InputNumber>
        </Form.Item>
        <Form.Item
          name="display"
          label="Screen Type"
          rules={[
            {
              required: true,
              message: "Please Select Screen Type!",
            },
          ]}
        >
          <Select
            allowClear
            style={{ width: "100%" }}
            placeholder="Select Screen Type"
          >
            {display.map((item) => {
              return <Option key={item._id}>{item.type}</Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Radio ?"
          name="radio"
          rules={[
            {
              required: true,
              message: "Please Select Yes/No!",
            },
          ]}
        >
          <Radio.Group onChange={onChangeRadio} value={radio}>
            <Radio value={true}>YES</Radio>
            <Radio value={false}>NO</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="NFC ?"
          name="NFC"
          rules={[
            {
              required: true,
              message: "Please Select Yes/No!",
            },
          ]}
        >
          <Radio.Group onChange={onChangeNFC} value={NFC}>
            <Radio value={true}>YES</Radio>
            <Radio value={false}>NO</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="battery"
          label="Battery Capacity"
          rules={[
            {
              required: true,
              message: "Please input Battery Capacity!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="IP_Rating" label="IP Rating">
          <Select
            allowClear
            style={{ width: "100%" }}
            mode="multiple"
            placeholder="Please Select IP Rating"
          >
            {Array.from(Array(69).keys()).map((item) => {
              return <Option key={`IP${item}`}>{`IP${item}`}</Option>;
            })}
          </Select>
          {/* <AutoComplete
            mode="multiple"
            options={Array.from(Array(69).keys()).map((item) => {
              return { value: `IP${item}` };
            })}
            // onChange={(e) => console.log(`ONCHANGE OF AUTOCOM` + e)}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          ></AutoComplete> */}
        </Form.Item>
        <Form.Item label="Colors" name="color">
          <Input placeholder="Enter Colors of this mobile"></Input>
        </Form.Item>
        <Form.Item
          label="Release Date"
          name="relDate"
          rules={[
            {
              required: true,
              message: "Please Select Release Date!",
            },
          ]}
        >
          <DatePicker></DatePicker>
        </Form.Item>
        <Form.Item
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input Price!",
            },
          ]}
        >
          <InputNumber></InputNumber>
        </Form.Item>
        <Form.Item
          name="status"
          label="STATUS: "
          rules={[
            {
              required: true,
              message: "Please input Status of Mobile!",
            },
          ]}
        >
          <Input placeholder="Enter the status. e.g; rumured,released"></Input>
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

export default NewMobile;
