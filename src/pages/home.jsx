import { useEffect, useState } from "react";
import { Item } from "../components/item";
import response from "../data/data";
import { useContextData } from "../context/data";
import { restructureData } from "../utils/utility";

export const Home = () => {
  const { setDataProvider } = useContextData();
  const [data, setData] = useState([]);

  useEffect(() => {
    let tempData = [];
    if (response.message.toLowerCase().includes("success")) {
      tempData = restructureData(response.data);

      setDataProvider(tempData);
      setData(tempData);
    }
  }, [setDataProvider]);

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
