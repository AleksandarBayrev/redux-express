const ReduxStore = (function() {
    const reducer = (state = [], action) => {
        switch (action.type) {
            case StoreActions.replace:
                state = action.payload
                return state

            case StoreActions.delete:
                state.splice(action.payload.index, 1)
                return state
            
            default:
                return state
        }
    }

    const store = Redux.createStore(reducer)

    return {
        getState: store.getState,
        subscribe: store.subscribe,
        dispatch: store.dispatch
    }
}())