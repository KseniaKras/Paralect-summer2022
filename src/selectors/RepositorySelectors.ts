import {AppRootStateType} from "../redux/Store";
import {UsedRepositoriesType} from "../api/API";

export const selectRepositoriesCount = (state: AppRootStateType): number | undefined => {
    return state.user.user?.public_repos
}
export const selectRepositories = (state: AppRootStateType): null | UsedRepositoriesType => {
    return state.repository.repositories
}
export const selectRepoPageSize = (state: AppRootStateType): number => {
    return state.repository.pageSize
}
export const selectRepoCurrentPage = (state: AppRootStateType): number => {
    return state.repository.currentPage
}