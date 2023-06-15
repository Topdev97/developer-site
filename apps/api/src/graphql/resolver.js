const { getImage, getImages } = require("./image.resolver");
const { getLabel, getLabels ,addLabel,updateLabel,deleteLabel} = require("./label.resolver");
const { getProfile } = require("./profile.resolver");
const { getProject, getProjects,addProject,updateProject,deleteProject } = require("./project.resolver");

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
  Mutation:{
    addProject,
    updateProject,
    deleteProject,
    deleteLabel
  }
};

module.exports = {
  resolvers,
};
