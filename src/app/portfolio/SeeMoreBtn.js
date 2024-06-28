import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {RightBlackArrowIcon} from "../icons/RightBlackArrowIcon";
import {RightColorArrowIcon} from "../icons/RightColorArrowIcon";

export const SeeMoreBtn = ({url}) => {
    const {t} = useTranslation();
    const [isColoredIcon, setIsColoredIcon] = useState(false);

    const openNewTab = () => {
        window.open(`${window.location.origin}${url}`, '_blank');
    }

    return (
        <button className={'see-more-button'}
                onClick={() => openNewTab()}
                onMouseOver={() => setIsColoredIcon(true)}
                onMouseLeave={() => setIsColoredIcon(false)}>
            {t('seeMore')}
            <div className={'arrow-icon-wrapper'}>
                {isColoredIcon ? <RightColorArrowIcon/> : <RightBlackArrowIcon/>}
            </div>
        </button>
    );
}