const { getImage, getImages } = require("./image.resolver");
const { getLabel, getLabels } = require("./label.resolver");
const { getProfile } = require("./profile.resolver");
const { getProject, getProjects } = require("./project.resolver");

const resolvers = {
  Query: {
    Projects: getProjects,
    Project: getProject,
    Label: getLabel,
    Labels: getLabels,
    Profile:getProfile,
    // Image:getImage,
    // Images:getImages
  },
};

module.exports = {
  resolvers,
};
