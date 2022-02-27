import { useState } from "react";
import { useContextData } from "../context/data";
import "./create.css";
import { useNavigate } from "react-router-dom";

export const Create = () => {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("Please fill in name above!");
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState("");
  const { data_provider, setDataProvider } = useContextData();
  const history = useNavigate();

  const handleInput = (e) => {
    let value = e.target.value;

    if (value.length < 3) {
      setErrMsg("Please fill min. 3 char!");
      setError(true);
    } else {
      setError(false);
      setName(value);
    }
  };

  const handleCheck = (e) => {
    let value = e.target.value;

    var index = skills.indexOf(value);
    if (index !== -1) {
      skills.splice(index, 1);
      setSkills(skills);
    } else {
      setSkills([...skills, value]);
    }
  };

  const handleSubmit = () => {
    if (name.length < 1) {
      setErrMsg("Please fill in name above!");
      setError(true);
    } else {
      setError(false);
      let newPerson = {
        id: data_provider.length + 1,
        full_name: name,
        expert_skills: skills,
      };

      setDataProvider([...data_provider, newPerson]);
      history(`/`);
    }
  };

  return (
    <div className="profile__box">
      <div style={{ textAlign: "center" }} className="box__form">
        <h1 className="mb-2">Create Person</h1>

        <div className="mb-1 text-left">
          <h3>
            <strong>Name</strong>
          </h3>
          <input type="text" className="input__name" onInput={handleInput} />
          {!error || <small style={{ color: "red" }}>{errMsg}</small>}
        </div>

        <div className="mb-4 text-left">
          <h3>
            <strong>Expert Skills</strong>
          </h3>
          <div>
            <input
              type="checkbox"
              id="skill1"
              name="skills"
              onChange={handleCheck}
              value="Javascript"
            />
            <label htmlFor="skill1">Javascript</label>
            <br />
            <input
              type="checkbox"
              id="skill2"
              name="skills"
              onChange={handleCheck}
              value="Python"
            />
            <label htmlFor="skill2">Python</label>
            <br />
            <input
              type="checkbox"
              id="skill3"
              name="skills"
              onChange={handleCheck}
              value="Golang"
            />
            <label htmlFor="skill3">Golang</label>
            <br />
            <input
              type="checkbox"
              id="skill4"
              name="skills"
              onChange={handleCheck}
              value="PHP"
            />
            <label htmlFor="skill4">PHP</label>
            <br />
          </div>
        </div>

        <div>
          <button className="btn__submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
