import React from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

export const ProjectActive = () => {
    const {t} = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('projectActiveName')}</title>
            </Helmet>
            <img className="project-svg" src={process.env.PUBLIC_URL + '/theme/svg-projects/project-active.svg'}
                 alt={'Project Active'}/>
        </>

    );
}