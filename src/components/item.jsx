import { Link } from "react-router-dom";
import "./item.css";

export const Item = ({ data }) => {
  return (
    <>
      {data.map((item, key) => {
        return (
          <Link
            key={key}
            to={`profile/${item.full_name}`}
            className="item__box"
          >
            <div>
              <div>
                <h2 className="info mb-1">{item.full_name}</h2>
                <p className="info">Expert skills:</p>
                <p className="info">
                  {item.expert_skills.length === 0
                    ? "-"
                    : item.expert_skills.map(
                        (item2, idx) => (idx === 0 ? "" : ", ") + item2
                      )}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
