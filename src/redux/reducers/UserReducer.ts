import {
    GetUserResponseType,
    UsedUserType,
    userAPI,
} from "../../api/API";
import {AppThunk} from "../Store";
import {setIsLoading} from "./AppReducer";
import {getRepositories} from "./RepositoryReducer";


const initialState = {
    user: null,
    isUser: false,
}

export const userReducer = (state: InitialStateType = initialState, action: UserActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-USER':
        case "SET-IS-USER":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


//actionCreators
export const setUser = (user: GetUserResponseType) => ({
    type: 'SET-USER',
    payload: {
        user
    }
} as const)
export const setIsUser = (isUser: boolean) => ({
    type: 'SET-IS-USER',
    payload: {
        isUser
    }
} as const)


//thunk
export const getUserTC = (username: string): AppThunk =>
    async (dispatch) => {
        dispatch(setIsLoading(true))
        try {
            let response = await userAPI.getUser(username);
            dispatch(setIsUser(true))
            dispatch(setUser(response.data))
            debugger
            await dispatch(getRepositories(username, 1, 4))
        } catch (error) {
            dispatch(setIsUser(false))
        } finally {
            dispatch(setIsLoading(false))
        }
    }


//types
type InitialStateType = {
    user: null | UsedUserType
    isUser: boolean
}

export type UserActionsType =
    | ReturnType<typeof setUser>
    | ReturnType<typeof setIsUser>