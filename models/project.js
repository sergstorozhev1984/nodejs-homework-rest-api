const { Schema, model } = require("mongoose");
const Joi = require("joi");

const handleSaveErrors = require("../helpers/handleSaveErrors");

const projectSchema = new Schema(
  {
    project: {
      type: String,
    },
    img_url: {
      type: String,
    },
    building_state: {
      type: String,
    },
    section: {
      type: String,
    },
    rooms_count: {
      type: Number,
    },
    floor: {
      type: Number,
    },
    object_type: {
      type: String,
    },
    square: {
      type: Number,
    },
    price: {
      type: Number,
    },
    is_discount: {
      type: Boolean,
    },
    discount_percent: {
      type: Number,
    },
    district: {
      type: String,
    },
  },
  { versionKey: false, timeseries: true }
);

projectSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  project: Joi.string().required(),
  img_url: Joi.string().required(),
  building_state: Joi.string().required(),
  section: Joi.string().required(),
  rooms_count: Joi.number().integer().required(),
  floor: Joi.number().integer().required(),
  object_type: Joi.string().required(),
  square: Joi.number().required(),
  price: Joi.number().required(),
  is_discount: Joi.boolean().required(),
  discount_percent: Joi.number(),
  district: Joi.string().required(),
  // aerotour:
});

const schemas = {
  addSchema,
};

const Project = model("project", projectSchema);

module.exports = {
  Project,
  schemas,
};
