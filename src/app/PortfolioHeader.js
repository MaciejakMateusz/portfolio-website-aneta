import React from "react";
import {DownAnimIcon} from "./icons/DownAnimIcon";

export const PortfolioHeader = () => {
    return (
        <div className={'portfolio-header'}>
            <span className={'portfolio-span'}>Portfolio</span>
            <div className={'down-anim-icon'}>
                <DownAnimIcon/>
            </div>
        </div>
    );
}