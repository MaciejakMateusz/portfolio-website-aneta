import React, {forwardRef} from "react";
import {useTranslation} from "react-i18next";
import {ContactButton} from "./ContactButton";

export const ContactSection = forwardRef((props, ref) => {
    const {t} = useTranslation();
    return (
        <section className={'contact-section'} id={'contact'} ref={ref}>
            <p className={'contact-p'}>{t('contact')}</p>
            <p className={'contact-msg-p'}>{t('contactMsg')}</p>
            <div className={'contact-buttons-grid'}>
                <ContactButton iconName={'phone-icon.svg'}
                               text={'+48 880 200 162'}
                               subClass={'phone'}
                               href={'tel:+48 880 200 162'}/>
                <ContactButton iconName={'mail-icon.svg'}
                               text={'maciejak.neta@gmail.com'}
                               subClass={'email'}
                               href={'mailto:maciejak.neta@gmail.com'}/>
                <ContactButton iconName={'linkedin-icon.svg'}
                               text={'LinkedIn'}
                               subClass={'linkedin'}
                               href={'https://www.linkedin.com/in/aneta-wolanczyk'}/>
            </div>
        </section>
    );
});