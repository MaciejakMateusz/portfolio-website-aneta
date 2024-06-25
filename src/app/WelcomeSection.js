import React from "react";
import {useTranslation} from "react-i18next";

export const WelcomeSection = () => {
    const {t} = useTranslation();
    return (
        <section className={'welcome-section'}>
            <div className={'welcome-wrapper'}>
                <p className={'welcome-p'}>{t('hiItsAneta')}</p>
                <p className={'ux-ui-p'}>UXUI Designer <span className={'junior-span'}>Junior</span></p>
                <p className={'self-description'}>{t('selfDescription')}</p>
            </div>
        </section>
    );
}