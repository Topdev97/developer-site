import { faker } from "@faker-js/faker";

export class UserService {

    constructor() {
      this.users = [
        {
            id:1,
            email:"davc93@gmail.com",
            password:"clave1234",
            role:"admin"
        },
        {id:2,
            email:"dvergarac@alumnosuls.cl",
            password:"clave1234",
            role:null
        }
      ];
    }
  
  
    async create(data) {
      const newUser = {
        id: faker.datatype.uuid(),
        ...data
      }
      this.users.push(newUser);
      return newUser;
    }
  
    async find() {
        
        return this.users
      
    }
  
    async findOne(id) {
      const user = this.users.find(item => item.id === id);
      if (!user) {
        throw new Error('user not found');
      }
      return user;
    }
  
    async update(id, changes) {
      const index = this.users.findIndex(item => item.id === id);
      if (index === -1) {
        throw new Error('user not found');
      }
      const user = this.users[index];
      this.users[index] = {
        ...user,
        ...changes
      };
      return this.users[index];
    }
  
    async delete(id) {
      const index = this.users.findIndex(item => item.id === id);
      if (index === -1) {
        throw new Error('user not found');
      }
      this.users.splice(index, 1);
      return { id };
    }
  
  }
  
  