import React, {FC} from "react";
import s from './InitialView.module.scss'

type InitialViewPropsType = {
    text: string
    image: string
}
export const InitialView: FC<InitialViewPropsType> = ({text, image}) => {
    return (
        <div className={s.initialBlock}>
            <img src={image} alt="search" className={s.image}/>
            <span>
                {text}
            </span>
        </div>
    )
}