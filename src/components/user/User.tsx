import React, {FC} from 'react';
import s from './User.module.scss'
import {Repositories} from "./repositories/Repositories";
import {UserInformation} from "./userInformation/UserInformation";
import user from "../../common/images/icons/user.png"
import {useAppSelector} from "../../hooks/Hooks";
import {InitialView} from "../initialScreenView/InitialView";
import {selectIsUser} from "../../selectors/UserSelectors";


type UserPropsType = {
    userLogin: string
}
export const User: FC<UserPropsType> = ({userLogin}) => {

    const isUser = useAppSelector(selectIsUser)

    return (
        <>
            {
                isUser
                    ? <div className={s.userBlock}>
                        <UserInformation login={userLogin}/>
                        <Repositories login={userLogin}/>
                    </div>
                    : <InitialView text={'User not found'} image={user}/>
            }

        </>
    );
};

