import React, {FC, useEffect} from 'react';
import s from "./UserInformation.module.scss";
import {UserFollowers} from "./userFollowers/UserFollowers";
import followers from "../../../common/images/followers.png";
import followings from "../../../common/images/followings.png";
import {useAppDispatch, useAppSelector} from "../../../hooks/Hooks";
import {
    selectUserAvatar,
    selectUserFollowers,
    selectUserFollowings, selectUserGithubUrl,
    selectUserName
} from "../../../selectors/UserSelectors";
import {getUserTC} from "../../../redux/reducers/UserReducer";


type UserInfoPropsType = {
    login: string | undefined
}
export const UserInformation: FC<UserInfoPropsType> = ({login}) => {

    const userName = useAppSelector(selectUserName)
    const userFollowers = useAppSelector(selectUserFollowers)
    const userFollowing = useAppSelector(selectUserFollowings)
    const userPhoto = useAppSelector(selectUserAvatar)
    const userGithubUrl = useAppSelector(selectUserGithubUrl)

    const dispatch = useAppDispatch()

    useEffect(() => {

        if (login) {
            dispatch(getUserTC(login))
        }

    }, [dispatch, login])

    return (
        <div className={s.userInfo}>
            <div className={s.container}>
                <div className={s.imageBlock}>
                    <img src={userPhoto} alt=""/>
                </div>
                <h3 className={s.userName}>
                    {userName}
                </h3>
                <a href={userGithubUrl}
                   target={"_blank"}
                   rel="noreferrer"
                   className={s.login}
                >
                    {login}
                </a>
                <div className={s.followersBlock}>
                    <UserFollowers
                        image={followers}
                        count={userFollowers}
                        description={'followers'}
                    />
                    <UserFollowers
                        image={followings}
                        count={userFollowing}
                        description={'following'}
                    />
                </div>
            </div>
        </div>
    );
};
