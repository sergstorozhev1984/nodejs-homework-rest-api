const { Project } = require("../../models/project.js");

const getAll = async (req, res) => {
  const result = await Project.find({});

  res.json(result);
};

module.exports = getAll;

// const filterSettings = {};
//   if (project && rooms_count && building_state && district) {
//     filterSettings.project = project;
//     filterSettings.rooms_count = rooms_count;
//     filterSettings.building_state = building_state;
//     filterSettings.district = district;
//   } else if (rooms_count && building_state && district) {
//     filterSettings.rooms_count = rooms_count;
//     filterSettings.building_state = building_state;
//     filterSettings.district = district;
//   } else if (project && building_state && district) {
//     filterSettings.project = project;
//     filterSettings.building_state = building_state;
//     filterSettings.district = district;
//   } else if ()

//   console.log(filterSettings);
