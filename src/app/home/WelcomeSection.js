import React, {forwardRef} from "react";
import {useTranslation} from "react-i18next";

export const WelcomeSection = forwardRef((props, ref) => {
    const {t} = useTranslation();
    return (
        <section className={'welcome-section'} id={'home'} ref={ref}>
            <div className={'welcome-wrapper'}>
                <img className={'background-sprinkles'}
                     src={`${process.env.PUBLIC_URL}/theme/images/background-sprinkles.png`}
                     alt={'sprinkles'}/>
                <img className={'background-sprinkles-mobile'}
                     src={`${process.env.PUBLIC_URL}/theme/images/background-sprinkles-mobile.png`}
                     alt={'sprinkles'}/>
                <p className={'name-surname-p'}>Aneta Maciejak</p>
                <p className={'ux-ui-p'}>UXUI Designer</p>
                <p className={'self-description'}>
                    <span className={'self-description hi'}>{t('hello')}</span>
                    <br/>
                    {t('selfDescription')}
                </p>
            </div>
        </section>
    );
});