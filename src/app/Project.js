import React from "react";
import {SeeMoreBtn} from "./SeeMoreBtn";

export const Project = ({imageName, name, subtitle, description, path}) => {
    return (
        <>
            <div className={'portfolio-project-photo'}
                 style={{backgroundImage: `url(${process.env.PUBLIC_URL}/theme/images/${imageName})`}}/>
            <div className={'portfolio-project-text'}>
                <p className={'project-name'}>{name}</p>
                <p className={'project-subtitle'}>{subtitle}</p>
                <p className={'project-description'}>{description}</p>
                <SeeMoreBtn path={path}/>
            </div>
        </>
    );
}