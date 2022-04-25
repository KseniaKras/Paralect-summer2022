import {AppRootStateType} from "../redux/Store";

export const selectUserLoginName = (state: AppRootStateType): string | undefined => {
    return state.user.user?.login
}
export const selectUserName = (state: AppRootStateType): string | undefined => {
    return state.user.user?.name
}
export const selectUserFollowers = (state: AppRootStateType): number | undefined => {
    return state.user.user?.followers
}
export const selectUserFollowings = (state: AppRootStateType): number | undefined => {
    return state.user.user?.following
}
export const selectUserAvatar = (state: AppRootStateType): string | undefined => {
    return state.user.user?.avatar_url
}
export const selectUserGithubUrl = (state: AppRootStateType): string | undefined => {
    return state.user.user?.html_url
}
export const selectIsUser = (state: AppRootStateType): boolean => {
    return state.user.isUser
}
