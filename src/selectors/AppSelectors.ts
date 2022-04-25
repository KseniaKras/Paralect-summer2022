import {AppRootStateType} from "../redux/Store";

export const selectIsLoading = (state: AppRootStateType): boolean => {
    return state.app.isLoading
}
export const selectIsInitialized = (state: AppRootStateType): boolean => {
    return state.app.isInitialized
}