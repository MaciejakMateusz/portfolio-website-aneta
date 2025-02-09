import React from "react";
import {useTranslation} from "react-i18next";
import {RightBlackArrowIcon} from "../icons/RightBlackArrowIcon";

export const SeeMoreBtn = ({url}) => {
    const {t} = useTranslation();

    const openNewTab = () => {
        window.open(`${window.location.origin}${url}`, '_blank');
    }

    return (
        <button className={'see-more-button'}
                onClick={() => openNewTab()}>
            {t('seeMore')}
            <div className={'arrow-icon-wrapper'}>
                <RightBlackArrowIcon/>
            </div>
        </button>
    );
}