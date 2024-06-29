import React from "react";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";
import {ReactSVG} from "react-svg";

export const BloodDonation = () => {
    const {t} = useTranslation();
    return (
        <>
            <Helmet>
                <title>{t('bloodDonationName')}</title>
            </Helmet>
            <ReactSVG className="project-svg" src={process.env.PUBLIC_URL + '/theme/svg-projects/blood-donation.svg'}/>
        </>

    );
}