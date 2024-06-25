import React from "react";
import {PortfolioHeader} from "./PortfolioHeader";

export const PortfolioSection = () => {
    return (
        <>
            <section className={'portfolio-header-section'}>
                <PortfolioHeader/>
            </section>
            <section className={'portfolio-content-section'}>
                <div className={'portfolio-projects-grid'}>
                    <div className={'portfolio-project-photo'}>

                    </div>
                    <div className={'portfolio-project-text'}>

                    </div>
                </div>
            </section>
        </>
    );

}