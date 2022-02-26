const isExpert = (val) => val === "expert";

const parseObject = (data) => {
  let res = [];

  if (Object.keys(data).length > 0) {
    Object.keys(data).map(
      (key) => isExpert(data[key]) || res.push(key.toString())
    );
  }

  return res;
};

const restructureData = (data) => {
  let tempData = data.map((item) => {
    let tempSkill = parseObject(item.skills);

    return {
      id: item.id,
      full_name: `${item.first_name} ${item.last_name}`,
      expert_skills: tempSkill,
    };
  });

  return tempData;
};

export { isExpert, parseObject, restructureData };
