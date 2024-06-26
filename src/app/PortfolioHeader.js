import React from "react";
import {DownArrowIcon} from "./icons/DownArrowIcon";

export const PortfolioHeader = () => {
    return (
        <div className={'portfolio-header'}>
            <span className={'portfolio-span'}>Portfolio</span>
            <div className={'down-anim-icon'}>
                <DownArrowIcon/>
            </div>
        </div>
    );
}