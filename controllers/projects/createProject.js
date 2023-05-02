const { Project } = require("../../models/project");

const createProject = async (req, res) => {
  // const {_id: owner} = req.user;
  const result = await Project.create({ ...req.body });
  res.status(201).json(result);
};

// const filter = {
//   project: "",
//   rooms_count: null,
//   building_state: "",
//   districts: "",
//   price: null,
//   square: null,
//   is_discount: false,
// };
// const projects = [
//   {
//     project: "ЖК «Family Plaza»",
//     img_url: "https://blagodeveloper.com/wp-content/uploads/2023/03/5_62m2.jpg",
//     building_state: "50% готовності",
//     section: "№2",
//     rooms_count: 3,
//     floor: 5,
//     object_type: "секція",
//     square: 62.3,
//     price: 765000.55,
//     is_discount: true,
//     discount_percent: 3,
//   },
//   {
//     project: "ЖК «Family Plaza»",
//     img_url: "https://blagodeveloper.com/wp-content/uploads/2023/03/5_62m2.jpg",
//     building_state: "50% готовності",
//     section: "№2",
//     rooms_count: 3,
//     floor: 5,
//     object_type: "секція",
//     square: 62.3,
//     price: 765000.55,
//     is_discount: true,
//     discount_percent: 3,
//   },
//   {
//     project: "ЖК «Family Plaza»",
//     img_url: "https://blagodeveloper.com/wp-content/uploads/2023/03/5_62m2.jpg",
//     building_state: "50% готовності",
//     section: "№2",
//     rooms_count: 3,
//     floor: 5,
//     object_type: "секція",
//     square: 62.3,
//     price: 765000.55,
//     is_discount: true,
//     discount_percent: 3,
//   },
//   {
//     project: "ЖК «Family Plaza»",
//     img_url: "https://blagodeveloper.com/wp-content/uploads/2023/03/5_62m2.jpg",
//     building_state: "50% готовності",
//     section: "№2",
//     rooms_count: 3,
//     floor: 5,
//     object_type: "секція",
//     square: 62.3,
//     price: 765000.55,
//     is_discount: true,
//     discount_percent: 3,
//   },
//   {
//     project: "ЖК «Family Plaza»",
//     img_url: "https://blagodeveloper.com/wp-content/uploads/2023/03/5_62m2.jpg",
//     building_state: "50% готовності",
//     section: "№2",
//     rooms_count: 3,
//     floor: 5,
//     object_type: "секція",
//     square: 62.3,
//     price: 765000.55,
//     is_discount: true,
//     discount_percent: 3,
//   },
//   {
//     project: "ЖК «Family Plaza»",
//     img_url: "https://blagodeveloper.com/wp-content/uploads/2023/03/5_62m2.jpg",
//     building_state: "50% готовності",
//     section: "№2",
//     rooms_count: 3,
//     floor: 5,
//     object_type: "секція",
//     square: 62.3,
//     price: 765000.55,
//     is_discount: true,
//     discount_percent: 3,
//   },
// ];

// const filteredProjects = projects.filter(item => item.project === );
module.exports = createProject;
