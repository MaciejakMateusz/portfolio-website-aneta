import React from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import {ReactSVG} from "react-svg";

export const ProjectActive = () => {
    const {t} = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('projectActiveName')}</title>
            </Helmet>
            <ReactSVG className="project-svg" src={process.env.PUBLIC_URL + '/theme/svg-projects/project-active.svg'}/>
        </>

    );
}