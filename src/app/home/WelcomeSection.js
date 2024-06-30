import React from "react";
import {useTranslation} from "react-i18next";
import {Element} from "react-scroll";

export const WelcomeSection = () => {
    const {t} = useTranslation();
    return (
        <Element className={'welcome-section'} name={'home'} id={'home'}>
            <div className={'welcome-wrapper'}>
                <p className={'welcome-p'}>{t('hiItsAneta')}</p>
                <p className={'ux-ui-p'}>UXUI Designer <span className={'junior-span'}>Junior</span></p>
                <p className={'self-description'}>{t('selfDescription')}</p>
            </div>
        </Element>
    );
}