import React from "react";
import {useTranslation} from "react-i18next";

export const ExperienceSection = () => {
    const {t} = useTranslation();

    return (
        <section className={"experience-section"}>
            <p className={'experience-p'}>{t('experience')}</p>
            <p className={'experience-description'}>{t('experienceDescription')}</p>
            <div className={'experience-brands-grid'}>
                <img className={'experience-brand a'}
                     alt={'Softie'}
                     src={`${process.env.PUBLIC_URL}/theme/images/softie.gif`}/>
                <img className={'experience-brand b'}
                     alt={'Akademia UXUI'}
                     src={`${process.env.PUBLIC_URL}/theme/images/akademiaUXUI.png`}/>
            </div>
        </section>
    );
}