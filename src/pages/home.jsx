import { useEffect, useState } from "react";
import { Item } from "../components/item";
import response from "../data/data";
import { restructureData } from "../utils/utility";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempData = [];
    if (response.message.toLowerCase().includes("success")) {
      tempData = restructureData(response.data);
      setData(tempData);
    }
  }, []);

  const parentStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }; 

  return (
    <>
      <div style={parentStyle}>
        <Item data={data} />
      </div>
    </>
  );
};
