import React from "react";
import {useTranslation} from "react-i18next";
import {Navigate} from "react-router-dom";

export const SeeMoreBtn = ({path}) => {
    const {t} = useTranslation()

    const openNewTab = () => {
        return <Navigate to={path} />
    }

    return (
        <>
            <button className={'see-more-button'} onClick={() => openNewTab()}>{t('seeMore')}</button>
        </>
    );
}