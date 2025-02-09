import React from "react";
import {SeeMoreBtn} from "./SeeMoreBtn";
import {useTranslation} from "react-i18next";
import {ProjectLabel} from "./ProjectLabel";

export const Project = ({imageName, name, subtitle, description, url, isInteractive = true, projectLabel, figma}) => {
    const {t} = useTranslation();

    const openProjectTab = () => {
        if (!isInteractive) return;
        window.open(`${window.location.origin}${url}`, '_blank');
    }

    const renderHoverOverlay = () => {
        return isInteractive ?
            (<div className={'project-photo-overlay'}>{t('seeProject')}</div>) :
            (<></>);
    }

    const renderProjectLabel = () => {
        return projectLabel ?
            (<ProjectLabel text={projectLabel}/>) :
            (<></>);
    }

    const renderFigmaLink = () => {
        return figma ?
            (<span onClick={() => window.open(figma, '_blank')}
                   className={'figma-link'}>
                {t('figmaLink')}
            </span>) :
            (<></>);
    }

    return (
        <div className={'portfolio-project'}>
            <div className={'project-photo-wrapper'}>
                <div className={`photo-container ${!isInteractive ? 'no-pointer' : ''}`} onClick={openProjectTab}>
                    <img src={`${process.env.PUBLIC_URL}/theme/images/${imageName}`}
                         alt={imageName}
                         className={'portfolio-project-photo'}/>
                    {renderHoverOverlay()}
                    {renderProjectLabel()}
                </div>
            </div>
            <div className={'portfolio-project-text'}>
                <p className={`project-name ${!isInteractive ? 'no-pointer' : ''}`} onClick={openProjectTab}>{name}</p>
                <p className={'project-subtitle'}>{subtitle}</p>
                <p className={'project-description'}>{description} {renderFigmaLink()}</p>
                {url && <SeeMoreBtn url={url}/>}
            </div>
        </div>
    );
}