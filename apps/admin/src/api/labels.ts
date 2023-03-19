import { CreateLabelDto, UpdateLabelDto } from "../models/project.model";

class LabelService{

    async createLabel(label:CreateLabelDto){

    }
    async updateLabel(label:UpdateLabelDto){}

    async getLabels(){

    }
    async deleteLabel(id:number){}
}

export default new LabelService()