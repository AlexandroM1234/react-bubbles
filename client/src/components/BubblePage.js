import React, { useState, useEffect } from "react";
import axios from "axios";
import AxiosWithAuth from "./AxiosWithAuth";
import { Route } from "react-router-dom";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getData = () => {
    AxiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then(res => {
        // console.log(res.data);
        setColorList(res.data);
      })
      .catch(err => console.log("you messed up the fetch for data", err));
  };

  useEffect(getData, []);

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getData={getData}
      />

      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
