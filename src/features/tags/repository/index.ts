import IRepository from "../../../repository/IRepository";
import * as data from "./data.json";

export interface ITag {}

const repository: IRepository<ITag> = {
    getAll: async () => data,
    getOne: async id => data.find(item => item.id === id)
};

export default repository;