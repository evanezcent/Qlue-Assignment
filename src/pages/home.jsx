import { useEffect, useState } from "react";
import response from "../data/data";
import { restructureData } from "../utils/utility";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempData = [];
    if (response.message.toLowerCase().includes("success")) {
      tempData = restructureData(response.data);
      setData(tempData);
      console.log(tempData);
    }
  }, []);

  return (
    <>
      {data.map((item) => {
        return <h2>{item.full_name}</h2>;
      })}
    </>
  );
};
