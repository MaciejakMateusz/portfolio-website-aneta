import React, {forwardRef} from "react";
import {PortfolioHeader} from "./PortfolioHeader";
import {Project} from "./Project";
import {useTranslation} from "react-i18next";
import {Element} from "react-scroll"

export const PortfolioSection = forwardRef((props, ref) => {
    const {t} = useTranslation();

    return (
        <>
            <section className={'portfolio-header-section'}>
                <PortfolioHeader ref={ref}/>
            </section>
            <Element className={'portfolio-content-section'} name={'portfolio-projects'}>
                <div className={'portfolio-projects-grid'} id={'portfolio-projects'} ref={ref}>
                    <Project imageName={'mockup-trading.svg'}
                             name={'Trading App'}
                             subtitle={t('tradingAppSubtitle')}
                             description={t('tradingAppDescription')}
                             url={"/trading-app"}/>
                    <Project imageName={'mockup-active.svg'}
                             name={t('projectActiveName')}
                             subtitle={t('projectActiveSubtitle')}
                             description={t('projectActiveDescription')}
                             url={"/project-active"}/>
                    <Project imageName={'mockup-find-trip.svg'}
                             name={'Trip Finder'}
                             subtitle={t('findTripSubtitle')}
                             description={t('findTripDescription')}
                             url={"/trip-finder"}/>
                    <Project imageName={'mockup-blood-donations.svg'}
                             name={t('bloodDonationName')}
                             subtitle={t('bloodDonationSubtitle')}
                             description={t('bloodDonationDescription')}
                             url={"/blood-donation"}/>
                    <Project imageName={'mockup-ekosort.svg'}
                             name={'Ekosort'}
                             subtitle={t('ekosortSubtitle')}
                             description={t('ekosortDescription')}
                             url={"/ekosort"}/>
                </div>
            </Element>
        </>
    );
})