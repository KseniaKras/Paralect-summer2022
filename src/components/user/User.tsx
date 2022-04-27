import React from 'react';
import s from './User.module.scss';
import {Repositories} from "./repositories/Repositories";
import {UserInformation} from "./userInformation/UserInformation";
import usericon from "../../common/images/user.png";
import {useAppSelector} from "../../hooks/Hooks";
import {InitialView} from "../initialScreenView/InitialView";
import {selectIsUser, selectUserLoginName} from "../../selectors/UserSelectors";


export const User = () => {

    const userLogin = useAppSelector(selectUserLoginName)
    const isUser = useAppSelector(selectIsUser)

    return (
        <>
            {
                isUser
                    ? <div className={s.userBlock}>
                        <UserInformation login={userLogin}/>
                        <Repositories login={userLogin}/>
                    </div>
                    : <InitialView text={'User not found'} image={usericon}/>
            }

        </>
    );
};

