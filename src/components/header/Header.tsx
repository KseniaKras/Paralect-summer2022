import React, {ChangeEvent, KeyboardEvent, FC, useState} from 'react';
import s from './Header.module.scss';
import githubLogo from '../../common/images/icons/githubLogo.png';
import loupe from '../../common/images/icons/loupe.png';
import {useAppDispatch, useAppSelector} from "../../hooks/Hooks";
import LinearProgress from "@mui/material/LinearProgress";
import {selectIsLoading} from "../../selectors/AppSelectors";
import {getUserTC} from "../../redux/reducers/UserReducer";
import {setIsInitialized} from "../../redux/reducers/AppReducer";


export const Header: FC = () => {

    const [value, setValue] = useState<string>('')

    const isLoading = useAppSelector(selectIsLoading)
    const dispatch = useAppDispatch()

    const searchUserHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && value.trim() !== '') {
            dispatch(getUserTC(value))
            dispatch(setIsInitialized(true))
            setValue('')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className={s.headerBlock}>
            <span className={s.iconBlock}>
                <img src={githubLogo} alt="GithubLogo" className={s.logo}/>
            </span>
            <div className={s.searchBlock}>
                <img src={loupe} alt="search" className={s.loupe}/>
                <input
                    type="text"
                    value={value}
                    onChange={onChangeHandler}
                    onKeyPress={searchUserHandler}
                    placeholder={'Enter GitHub username'}
                />
            </div>
            {isLoading && <LinearProgress className={s.progressBar}/>}
        </div>
    );
};
