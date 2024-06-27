import React from "react";
import {useTranslation} from "react-i18next";
import {Element} from "react-scroll";

export const ExperienceSection = () => {
    const {t} = useTranslation();

    return (
        <Element className={'experience-section'} name={'experience'}>
            <p className={'experience-p'}>{t('experience')}</p>
            <p className={'experience-description'}>{t('experienceDescription')}</p>
            <div className={'experience-brands-grid'}>
                <div className={'brand-wrapper a'}>
                    <img className={'experience-brand'}
                         alt={'Softie'}
                         src={`${process.env.PUBLIC_URL}/theme/images/softie.gif`}/>
                </div>
                <div className={'brand-wrapper b'}>
                    <img className={'experience-brand'}
                         alt={'Akademia UXUI'}
                         src={`${process.env.PUBLIC_URL}/theme/images/akademiaUXUI.png`}/>
                </div>
            </div>
        </Element>
    );
}