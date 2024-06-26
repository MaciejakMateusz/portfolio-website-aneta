import React from "react";
import {PortfolioHeader} from "./PortfolioHeader";
import {Project} from "./Project";
import {useTranslation} from "react-i18next";

export const PortfolioSection = () => {
    const {t} = useTranslation();

    return (
        <>
            <section className={'portfolio-header-section'}>
                <PortfolioHeader/>
            </section>
            <section className={'portfolio-content-section'}>
                <div className={'portfolio-projects-grid'}>
                    <Project imageName={'mockup-trading.svg'}
                             name={'Trading App'}
                             subtitle={t('tradingAppSubtitle')}
                             description={t('tradingAppDescription')}
                             path={"/trading-app"}/>
                    <Project imageName={'mockup-active.svg'}
                             name={t('projectActiveName')}
                             subtitle={t('projectActiveSubtitle')}
                             description={t('projectActiveDescription')}
                             path={"/project-active"}/>
                    <Project imageName={'mockup-find-trip.svg'}
                             name={'Find My Trip'}
                             subtitle={t('findTripSubtitle')}
                             description={t('findTripDescription')}
                             path={"/find-my-trip"}/>
                    <Project imageName={'mockup-blood-donations.svg'}
                             name={t('bloodDonationName')}
                             subtitle={t('bloodDonationSubtitle')}
                             description={t('bloodDonationDescription')}
                             path={"/blood-donations"}/>
                </div>
            </section>
        </>
    );

}