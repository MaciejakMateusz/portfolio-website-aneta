import React, {forwardRef} from "react";
import {useTranslation} from "react-i18next";
import {ExperienceBrand} from "./ExperienceBrand";

export const ExperienceSection = forwardRef((props, ref) => {
    const {t} = useTranslation();

    return (
        <section className={'experience-section'} id={'experience'} ref={ref}>
            <p className={'experience-p'}>{t('experience')}</p>
            <p className={'experience-description'}>{t('experienceDescription')}</p>
            <div className={'experience-brands-grid'}>
                <ExperienceBrand wrapperType={'a'} imageName={'softie.gif'} alt={'Softie'}/>
                <ExperienceBrand wrapperType={'b'} imageName={'akademiaUXUI.png'} alt={'Akademia UXUI'}/>
            </div>
        </section>
    );
});