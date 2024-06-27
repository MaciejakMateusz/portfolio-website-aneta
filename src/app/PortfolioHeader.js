import React from "react";
import {DownArrowIcon} from "./icons/DownArrowIcon";
import {Link} from "react-scroll";

export const PortfolioHeader = () => {
    return (
            <Link className={'portfolio-header'}
                  activeClass="active"
                  to="portfolio-projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}>
            <span className={'portfolio-span'}>Portfolio</span>
            <div className={'down-anim-icon'}>
                <DownArrowIcon/>
            </div>
        </Link>
    );
}