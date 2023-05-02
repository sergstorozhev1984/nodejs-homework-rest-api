const { Project } = require("../../models/project.js");

const getFilteredProjects = async (req, res) => {
  const filter = {};
  if (req.query.project) {
    filter.project = req.query.project;
  }

  if (req.query.rooms_count) {
    filter.rooms_count = req.query.rooms_count;
  }
  if (req.query.building_state) {
    filter.building_state = req.query.building_state;
  }
  if (req.query.district) {
    filter.district = req.query.district;
  }

  if (req.query.is_discount) {
    filter.is_discount = req.query.is_discount;
  }

  if (req.query.minPrice && req.query.maxPrice) {
    filter.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
  }

  if (req.query.minSquare && req.query.maxSquare) {
    filter.square = { $gte: req.query.minSquare, $lte: req.query.maxSquare };
  }
  console.log(filter);
  const result = await Project.find(filter);

  console.log(result);
  res.json(result);
};

module.exports = getFilteredProjects;
