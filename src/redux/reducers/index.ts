import { combineReducers } from "redux/lib/redux";
import IStore from "../store";
import tags from "../../features/tags/redux/reducer";

export default combineReducers<IStore>({
    tags
});