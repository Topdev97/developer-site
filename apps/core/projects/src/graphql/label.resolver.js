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

const addLabel = async (_,{dto}) => {
  const label = await service.create(dto)
  return label
}
const updateLabel = async (_,{dto,id}) => {
  
  const label = await service.update(id,dto)
  return label
}
const deleteLabel = async (_,{id}) => { 

  return await service.delete(id)
 }

module.exports = {
  getLabel,
  getLabels,
  addLabel,
  updateLabel,
  deleteLabel
};
