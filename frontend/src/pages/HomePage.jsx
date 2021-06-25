import React from "react";
import axios from "axios";
import MyLayout from "../layouts/MyLayout";
import { useEffect, useState } from "react";
function HomePage() {
  const [data, setData] = useState([]);
  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("http://localhost:4000/match/get")
      .then((resp) => {
        setData(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setisloading(false);
  };
  return (
    <MyLayout>
      {isloading ? (
        <br />
      ) : (
        data.map((item) => {
          <div>{item.date + item.teamA + "VS" + item.teamB + item.city}</div>;
        })
      )}
    </MyLayout>
  );
}

export default HomePage;
