import { List } from "immutable";
import constants from "./constants";
import Factory, { ISimpleState } from "../../../redux/reducers/factory";
import { ITag } from "../repository";

export type ITagState = ISimpleState<ITag>;

export const initState: ITagState = {
    fetching: false,
    data: List(),
    fetchingOne: false
};

export default Factory<ITag, ITagState>(constants, initState);