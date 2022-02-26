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
    }
  }, []);

  const itemStyle = {
    textAlign: "left",
    marginBottom: "1.5rem",
  };

  const textStyle = {
    marginBottom: "2px",
    marginTop: "2px",
    lineHeight: "120%",
    textTransform: "capitalize",
  };

  return (
    <>
      {data.map((item, key) => {
        return (
          <div key={key} style={itemStyle}>
            <h2 style={textStyle}>{item.full_name}</h2>
            <h2 style={textStyle}>
              {item.expert_skills.length === 0
                ? "-"
                : item.expert_skills.map(
                    (item2, idx) => (idx == 0 ? "" : ", ") + item2
                  )}
            </h2>
          </div>
        );
      })}
    </>
  );
};
