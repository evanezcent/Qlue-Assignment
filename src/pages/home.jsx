import { useEffect } from "react";
import { Item } from "../components/item";
import response from "../data/data";
import { useContextData } from "../context/data";
import { restructureData } from "../utils/utility";
import { Link } from "react-router-dom";

export const Home = () => {
  const { setDataProvider, data_provider } = useContextData();

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    fontSize: "30px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "4px",
    position: "absolute",
    bottom: "1rem",
    left: "0",
    right: "0",
    margin: "auto",
  };

  useEffect(() => {
    let tempData = [];
    if (response.message.toLowerCase().includes("success")) {
      if (data_provider.length === 0) {
        tempData = restructureData(response.data);

        setDataProvider(tempData);
      }
    }

    return;
  }, [setDataProvider, data_provider]);

  const parentStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  return (
    <div style={parentStyle}>
      <Item data={data_provider} />

      <Link style={buttonStyle} to="create">
        +
      </Link>
    </div>
  );
};
