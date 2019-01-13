import thunk from "redux-thunk";
import { createStore, Store, applyMiddleware  } from "redux/lib/redux";
import reducer from "./reducers";
import IStore from "./store";

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
            return { };
        } catch (reason) {
            return undefined;
        }
    }
    private saveState(store: IStore) {
        return;
    }
}