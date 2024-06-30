import React from "react";
import {useTranslation} from "react-i18next";
import {Element} from "react-scroll";
import {ExperienceBrand} from "./ExperienceBrand";

export const ExperienceSection = () => {
    const {t} = useTranslation();

    return (
        <Element className={'experience-section'} name={'experience'} id={'experience'}>
            <p className={'experience-p'}>{t('experience')}</p>
            <p className={'experience-description'}>{t('experienceDescription')}</p>
            <div className={'experience-brands-grid'}>
                <ExperienceBrand wrapperType={'a'} imageName={'softie.gif'} alt={'Softie'}/>
                <ExperienceBrand wrapperType={'b'} imageName={'akademiaUXUI.png'} alt={'Akademia UXUI'}/>
            </div>
        </Element>
    );
}