import React from "react";
import {useTranslation} from "react-i18next";

export const NavHeader = () => {
    const {t} = useTranslation();
    return (
        <nav className={'nav-header'}>
            <div className={'nav-buttons-wrapper'}>
                <button className={'nav-btn'}>
                    <span>{t('aboutMe')}</span>
                </button>
                <button className={'nav-btn'}>
                    <span>{t('portfolio')}</span>
                </button>
                <button className={'nav-btn'}>
                    <span>{t('experience')}</span>
                </button>
                <button className={'nav-btn'}>
                    <span>{t('contact')}</span>
                </button>
            </div>
        </nav>
    );
}