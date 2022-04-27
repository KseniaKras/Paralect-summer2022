import {Dispatch} from "redux";
import {
    GetRepositoriesResponseType,
    UsedRepositoriesType,
    userAPI,
} from "../../api/API";
import {AppAllActionsType} from "../Store";
import {setIsLoading} from "./AppReducer";


const initialState = {
    repositories: null,
    currentPage: 1,
    pageSize: 4,
}

export const repositoryReducer =
    (state: InitialStateType = initialState, action: RepositoryActionsType): InitialStateType => {
        switch (action.type) {
            case 'SET-REPOSITORIES':
            case "SET-CURRENT-PAGE":
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state
        }
    }


//actionCreators
export const setRepositories = (repositories: GetRepositoriesResponseType) => ({
    type: 'SET-REPOSITORIES',
    payload: {
        repositories
    }
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: 'SET-CURRENT-PAGE',
    payload: {
        currentPage
    }
} as const)


//thunk
export const getRepositories = (username: string, currentPage: number, pageSize: number) =>
    async (dispatch: Dispatch<AppAllActionsType>) => {
        dispatch(setIsLoading(true))
        try {
            let response = await userAPI.getRepositories(username, currentPage, pageSize)
            dispatch(setRepositories(response.data))
            dispatch(setCurrentPage(currentPage))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setIsLoading(false))
        }
    }

//types
type InitialStateType = {
    repositories: null | UsedRepositoriesType
    currentPage: number
    pageSize: number
}

export type RepositoryActionsType =
    | ReturnType<typeof setRepositories>
    | ReturnType<typeof setCurrentPage>