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
                    <Project imageName={'mockup-hungry-scan.png'}
                             name={'HungryScan'}
                             subtitle={t('hungryScanSubtitle')}
                             description={t('hungryScanDescription')}
                             isInteractive={false}
                             projectLabel={'W trakcie'}/>
                    <Project imageName={'mockup-car-spec.png'}
                             name={'CarSpec Hub'}
                             subtitle={t('carSpecSubtitle')}
                             description={t('carSpecDescription')}
                             url={'/car-spec-hub'}
                             figma={'https://www.figma.com/design/Uo5BDTAhZ4KG919I20iFmR/CarSpec-Hub?node-id=0-1&t=eU02gyifnbK4igJC-1'}
                             projectLabel={'Nowość'}/>
                    <Project imageName={'mockup-trading.png'}
                             name={'Trading App'}
                             subtitle={t('tradingAppSubtitle')}
                             description={t('tradingAppDescription')}
                             url={'/trading-app'}/>
                    <Project imageName={'mockup-active.png'}
                             name={t('projectActiveName')}
                             subtitle={t('projectActiveSubtitle')}
                             description={t('projectActiveDescription')}
                             url={'/project-active'}
                             figma={'https://www.figma.com/design/yOPH4JumV5NymJuggz8isd/Active?node-id=0-1&t=H8vvYJy3nSgUFcR4-1'}/>
                    <Project imageName={'mockup-trip-finder.png'}
                             name={'Trip Finder'}
                             subtitle={t('findTripSubtitle')}
                             description={t('findTripDescription')}
                             url={'/trip-finder'}/>
                    <Project imageName={'mockup-blood-donations.png'}
                             name={t('bloodDonationName')}
                             subtitle={t('bloodDonationSubtitle')}
                             description={t('bloodDonationDescription')}
                             url={'/blood-donation'}/>
                    <Project imageName={'mockup-ekosort.png'}
                             name={'Ekosort'}
                             subtitle={t('ekosortSubtitle')}
                             description={t('ekosortDescription')}
                             url={'/ekosort'}
                             figma={'https://www.figma.com/design/QAkCsDurzvedTUJfujXsPV/Ekosort-HIfi?node-id=0-1&t=t5VJynzpDwO0vHXy-1'}/>
                </div>
            </Element>
        </>
    );
})