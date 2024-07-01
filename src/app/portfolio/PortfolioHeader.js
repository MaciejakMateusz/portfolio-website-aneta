import React, {forwardRef} from "react";
import {DownArrowIcon} from "../icons/DownArrowIcon";

export const PortfolioHeader = forwardRef((props, ref) => {

    const handleScrollToPortfolio = (offset = 0) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop + offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={'portfolio-header'}
             onClick={() => handleScrollToPortfolio(-100)}>
            <span className={'portfolio-span'}>Portfolio</span>
            <div className={'down-anim-icon'}>
                <DownArrowIcon/>
            </div>
        </div>
    );
})