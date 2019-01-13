import thunk from "redux-thunk";
import { createStore, Store, applyMiddleware  } from "redux/lib/redux";
import reducer from "./reducers";
import IStore from "./store";
import { initState as tagsInitState } from "../features/tags/redux/reducer";
import tagsActions from "../features/tags/redux/actions";
import { recursiveToArray, recursiveToList } from "./reducers/factory";

export class AppRedux {
    store: Store<IStore>;
    constructor() {
        this.build();
    }
    private stateLabel = "provectus-test-storage";
    private build() {
        this.store = this.buildStore();
        this.store.subscribe(() => {
            const state = this.store.getState();

            // Register properties to be synced between local storage and state
            this.saveState(state);

        });
    }
    private buildStore() {
        // Setup the Redux Store
        const persistedState: IStore = this.loadState();

        const store = createStore<IStore, any, any, any>(
            reducer,
            persistedState,
            applyMiddleware(thunk)
        );
        return store;
    }
    private loadState() {
        try {
            const serializedState = localStorage.getItem(this.stateLabel);
            if (serializedState === null) return undefined;
            const fromLocalStorage = JSON.parse(serializedState);
            return {
                tags: {
                    ...tagsInitState,
                    ...fromLocalStorage.tags,
                    data: recursiveToList(fromLocalStorage.tags.data)
                }
            };
        } catch (reason) {
            return undefined;
        }
    }
    private saveState(store: IStore) {
        const tags: any = { ...store.tags };
        tags.data = recursiveToArray(tags.data);
        localStorage.setItem(this.stateLabel, JSON.stringify({ tags }));
        return;
    }
}