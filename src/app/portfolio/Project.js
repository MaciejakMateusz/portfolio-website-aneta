import React from "react";
import {SeeMoreBtn} from "./SeeMoreBtn";
import {useTranslation} from "react-i18next";

export const Project = ({imageName, name, subtitle, description, url}) => {
    const {t} = useTranslation();

    const openProjectTab = () => {
        window.open(`${window.location.origin}${url}`, '_blank');
    }

    return (
        <div className={'portfolio-project'}>
            <div className={'project-photo-wrapper'}>
                <div className={'photo-container'} onClick={openProjectTab}>
                    <img className={'portfolio-project-photo'}
                         src={`${process.env.PUBLIC_URL}/theme/images/${imageName}`}
                         alt={imageName}/>
                    <div className={'project-photo-overlay'}>{t('seeProject')}</div>
                </div>
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