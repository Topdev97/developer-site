import mongoose from "mongoose";
const {Schema} = mongoose


const mySchema = new Schema({
    title:String,
    description:String,
    shortDescription:String,
    repositoryLink:String,
    webAppLink:String,
    labels:[String],
    techs:[String],
    images:[String],
    slug:String
})

const model = mongoose.model('Project',mySchema)

export default model