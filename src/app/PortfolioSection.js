import React from "react";
import {useTranslation} from "react-i18next";
import {DownAnimIcon} from "./icons/DownAnimIcon";

export const PortfolioSection = () => {
    const {t} = useTranslation();
    return (
        <section className={'portfolio-section'}>
            <div className={'portfolio-header'}>
                <span className={'portfolio-span'}>Portfolio</span>
                <div className={'down-anim-icon'}>
                    <DownAnimIcon />
                </div>
            </div>
        </section>
    );
}