import React from "react";
import {SeeMoreBtn} from "./SeeMoreBtn";

export const Project = ({imageName, name, subtitle, description, url}) => {
    return (
        <div className={'portfolio-project'}>
            <div className={'project-photo-wrapper'}>
                <img className={'portfolio-project-photo'}
                     src={`${process.env.PUBLIC_URL}/theme/images/${imageName}`}
                     alt={imageName}/>
            </div>
            <div className={'portfolio-project-text'}>
                <p className={'project-name'}>{name}</p>
                <p className={'project-subtitle'}>{subtitle}</p>
                <p className={'project-description'}>{description}</p>
                <SeeMoreBtn url={url}/>
            </div>
        </div>
    );
}