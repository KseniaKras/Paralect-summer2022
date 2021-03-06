import React, {FC, useEffect} from "react";
import s from "./Repositories.module.scss";
import {InitialView} from "../../initialScreenView/InitialView";
import empty from "../../../common/images/empty.png";
import {useAppDispatch, useAppSelector} from "../../../hooks/Hooks";
import {PaginationRounded} from "../../pagination/PaginationRounded";
import {
    selectRepositories,
    selectRepositoriesCount,
    selectRepoPageSize,
} from "../../../selectors/RepositorySelectors";
import {getRepositories} from "../../../redux/reducers/RepositoryReducer";


type RepositoriesPropsType = {
    login: string | undefined
}

export const Repositories: FC<RepositoriesPropsType> = ({login}) => {

    const repositoriesCount = useAppSelector(selectRepositoriesCount)
    const repositories = useAppSelector(selectRepositories)
    const pageSize = useAppSelector(selectRepoPageSize)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (login) {
            dispatch(getRepositories(login, 1, pageSize))
        }
    }, [dispatch, login, pageSize])

    const reposElements = repositories && repositories.map(r => {
        return (
            <div key={r.id} className={s.repository}>
                <a href={r.html_url} target={"_blank"} rel="noreferrer">
                    {r.name}
                </a>
                <p>{r.description}</p>
            </div>
        )
    })

    return (
        <>
            {
                repositoriesCount === 0
                    ? <InitialView
                        image={empty}
                        text={'Repository list is empty'}
                    />

                    : <div className={s.repositoriesBlock}>
                        <h2>
                            Repositories ({repositoriesCount})
                        </h2>
                        <div className={s.repositoriesItems}>
                            {reposElements}
                        </div>
                        <div className={s.pagination}>
                            <PaginationRounded
                                repositoriesCount={repositoriesCount}
                                pageSize={pageSize}
                                login={login}
                            />
                        </div>
                    </div>
            }
        </>

    )
}

