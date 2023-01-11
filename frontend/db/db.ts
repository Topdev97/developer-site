import dummy from './data'

class Database {
  constructor() {}

  async getAll(collection:string) {
    const col = Object.keys(dummy).find((key)=>key==collection) as string
    const data = dummy as any
    return data[col]
    

  }
  async getById(collection:string, slug: string ) {
    const col = Object.keys(dummy).find((key)=>key==collection) as string
    const data = dummy as any
    const result = data[col].find((object:any)=> object["slug"]==slug)
    return result

  }

  randomDelay() {
    new Promise((resolve) => {
      const max = 350;
      const min = 100;
      const delay = Math.floor(Math.random() * (max - min + 1)) + min;

      setTimeout(resolve, delay);
    });
  }
}

export { Database };
