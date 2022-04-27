import React, {FC} from "react";
import s from "./UserFollowers.module.scss";

type UserFollowingsPropsType = {
    image: string | undefined
    count: number | undefined
    description: string
}
export const UserFollowers : FC<UserFollowingsPropsType> = ({image, count, description}) => {

    if (count && count >= 1000) {
        count = +(count / 1000).toFixed(1)
    }

    return (
        <span className={s.followersBlock}>
            <img src={image} alt="followers"/>
            <span>{count} {description}</span>
        </span>
    )
}