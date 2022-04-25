import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk, {ThunkAction, ThunkMiddleware} from "redux-thunk";
import {appReducer, AppReducerActionsType} from "./reducers/AppReducer";
import {UserActionsType, userReducer} from "./reducers/UserReducer";
import {RepositoryActionsType, repositoryReducer} from "./reducers/RepositoryReducer";


const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    repository: repositoryReducer,
})

export const store = createStore(rootReducer, applyMiddleware(
    thunk as ThunkMiddleware<AppRootStateType, AppAllActionsType>,
))


export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppAllActionsType = UserActionsType | AppReducerActionsType | RepositoryActionsType


export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> =
    ThunkAction<ReturnType, AppRootStateType, unknown, UserActionsType | AppReducerActionsType>