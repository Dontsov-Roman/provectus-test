import IRepository from "../../../repository/IRepository";
import * as rawData from "./data.json";

const data = rawData.map(item => ({ ...item, id: item.id.replace("/", "_") }));

export interface ISentiment {
    negative: number;
    neutral: number;
    positive: number;
}
export interface IDay {
    date: string;
    volume: number;
}
export interface IPagetype {
    blog: number;
    facebook: number;
    forum: number;
    general: number;
    image: number;
    news: number;
    review: number;
    twitter: number;
    video: number;
}
export interface IQuery {
    id: number;
    name: string;
    volume: number;
}

export interface ITag {
    id: string;
    label: string;
    volume: number;
    type: string;
    sentiment: ISentiment;
    sentimentScore: number;
    burst: number;
    days: IDay[];
    pageType: IPagetype;
    queries: IQuery[];
}

const repository: IRepository<ITag> = {
    getAll: async () => data as ITag[],
    getOne: async id => {
        const tag = data.find((item: ITag) => item.id === id) as ITag;
        return tag;
    }
};

export default repository;