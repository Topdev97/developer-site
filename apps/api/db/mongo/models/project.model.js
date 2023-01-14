import mongoose from "mongoose";

const Schema = mongoose.Schema


const mySchema = Schema({
    title:String,
    description:String,
    shortDescription:String,
    repositoryLink:String
})

const model = mongoose.model('Project',mySchema)

export default model