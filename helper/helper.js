// create product id like mongoDB Database
export const generateMongoId =  () => {
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    const machineId = Math.floor(Math.random() * 16777215).toString(16);
    const processId = Math.floor(Math.random() * 65535).toString(16);
    const counter = Math.floor(Math.random() * 16777215).toString(16);
  
    return timestamp + machineId + processId + counter;
  }