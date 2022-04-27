const initialState = {
    isLoading: false,
    isInitialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-IS-LOADING":
        case "SET-IS-INITIALIZED":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


//ActionCreators
export const setIsLoading = (isLoading: boolean) => ({
    type: "SET-IS-LOADING",
    payload: {
        isLoading
    }
} as const)
export const setIsInitialized = (isInitialized: boolean) => ({
    type: "SET-IS-INITIALIZED",
    payload: {
        isInitialized
    }
} as const)


//types
type InitialStateType = {
    isLoading: boolean
    isInitialized: boolean
}

export type AppReducerActionsType =
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setIsInitialized>