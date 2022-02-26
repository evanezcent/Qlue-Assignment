const isExpert = (val) => val === "expert";

const parseObject = (data) => {
  let res = [];

  if (Object.keys(data).length > 0) {
    Object.keys(data).map((key) => {
      if (isExpert(data[key])) {
        res.push(key.toString());
      }
    });
  }

  return res;
};

const restructureData = (data) => {
  let tempData = [];
  data.map((item, idx) => {
    let tempSkill = parseObject(item.skills);

    tempData.push({
      id: item.id,
      full_name: `${item.first_name} ${item.last_name}`,
      expert_skills: tempSkill,
    });
  });

  return tempData;
};

export { isExpert, parseObject, restructureData };
