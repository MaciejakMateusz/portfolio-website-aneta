import React from "react";
import {NavHeader} from "./NavHeader";
import {WelcomeSection} from "./WelcomeSection";
import {BackgroundOrnaments} from "./BackgroundOrnaments";
import {PortfolioSection} from "./PortfolioSection";
import {Helmet} from "react-helmet";
import {ExperienceSection} from "./ExperienceSection";

export const Main = () => {

    return (
        <>
            <BackgroundOrnaments/>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <main className={'main-background'}>
                <NavHeader/>
                <WelcomeSection/>
                <PortfolioSection/>
                <ExperienceSection/>
            </main>
        </>
    );
}