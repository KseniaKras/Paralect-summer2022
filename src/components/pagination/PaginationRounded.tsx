import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/Hooks";
import {Stack} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import {getRepositories} from "../../redux/reducers/RepositoryReducer";
import {selectRepoCurrentPage} from "../../selectors/RepositorySelectors";
import s from "../user/repositories/Repositories.module.scss";
import {CalcItemsOnPage} from "../../utils/CalcItemsOnPage";

type PaginationPropsType = {
    repositoriesCount: number | undefined
    pageSize: number
    login: string | undefined
}
export const PaginationRounded: FC<PaginationPropsType> = ({repositoriesCount, pageSize, login}) => {

    const currentPage = useAppSelector(selectRepoCurrentPage)
    const dispatch = useAppDispatch()

    let count;
    if (repositoriesCount) {
        count = Math.ceil(repositoriesCount / pageSize);
    }

    const onChanged = (event: React.ChangeEvent<unknown>, page: number) => {
        if (login) {
            dispatch(getRepositories(login, page, pageSize))
        }
    }

    const calcLookingPages = () => {
        if (repositoriesCount) {
            return CalcItemsOnPage(repositoriesCount, currentPage, pageSize)
        }
    }

    return (
        <>
            <span className={s.paginationInfoText}>
                {calcLookingPages()}
            </span>
            <Stack spacing={2}>
                <Pagination
                    page={currentPage}
                    count={count}
                    color="primary"
                    shape="rounded"
                    onChange={onChanged}
                />
            </Stack>
        </>
    )
}