
const initialState = {
    isLoading: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType):InitialStateType => {
    switch (action.type) {
        case "SET-IS-LOADING":
        return {
            ...state,
            isLoading: action.isLoading
        }
        default:
            return state
    }
}


//ActionCreators
export const setIsLoading = (isLoading: boolean) =>
    ({type: "SET-IS-LOADING", isLoading}as const)


//types
type InitialStateType = {
    isLoading: boolean
}

export type AppReducerActionsType = ReturnType<typeof setIsLoading>