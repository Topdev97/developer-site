const {LabelService} = require('../services/label.service') 
const service = new LabelService()

const getLabels = async () => {
  const labels =  await service.findAll()
  return labels
};

const getLabel = async (_,{id}) => {
  const label = await service.findOne(id)
  return label
};

module.exports = {
  getLabel,
  getLabels,
};
