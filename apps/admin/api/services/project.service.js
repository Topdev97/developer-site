import { faker } from '@faker-js/faker';

export class ProjectService {

  constructor() {
    this.projects = [];
  }


  async create(data) {
    const newProject = {
      id: faker.datatype.number(),
      createdAt: new Date(),
      ...data
    }
    this.projects.push(newProject);
    return newProject;
  }

  async find() {
      
      return this.projects
    
  }

  async findOne(id) {
    const product = this.projects.find(item => item.id === id);
    if (!product) {
      throw new Error('product not found');
    }
    if (product.isBlock) {
      throw new Error('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.projects.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    const project = this.projects[index];
    this.projects[index] = {
      ...project,
      ...changes
    };
    return this.projects[index];
  }

  async delete(id) {
    const index = this.projects.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('product not found');
    }
    this.projects.splice(index, 1);
    return { id };
  }

}

