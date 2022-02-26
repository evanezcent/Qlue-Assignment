import { useParams } from "react-router";
import { useContextData } from "../context/data";
import "./profile.css";

export const Profile = () => {
  const { data_provider } = useContextData();
  const { name } = useParams();
  const profile = data_provider?.find(
    (element) => element.full_name.toLowerCase() === name.toLowerCase()
  );

  return (
    <>
      {profile !== null && profile !== undefined ? (
        <div className="profile__box">
          <div style={{ textAlign: "center" }}>
            <div className="image__box mb-1">
              <img src="/images/user.png" alt="" />
              <div className="badge__user">C</div>
            </div>
            <h1 className="mb-2">{profile.full_name}</h1>

            <h3 className="mb-1">
              <strong>Expert Skills</strong>
            </h3>
            <ul className="mb-1">
              {profile.expert_skills.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates repudiandae eius, ducimus velit quod error. Nostrum
              deleniti beatae neque quasi laboriosam iste placeat, dicta porro
              facilis, repellendus voluptatibus sequi libero.
            </p>
          </div>
        </div>
      ) : (
        <h1>KOSONG</h1>
      )}
    </>
  );
};
