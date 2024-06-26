import React from "react";
import {NavHeader} from "./NavHeader";
import {WelcomeSection} from "./WelcomeSection";
import {BackgroundOrnaments} from "./BackgroundOrnaments";
import {PortfolioSection} from "./PortfolioSection";
import {Helmet} from "react-helmet";

export const Main = () => {

    return (
        <>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <main className={'main-background'}>
                <BackgroundOrnaments/>
                <NavHeader/>
                <WelcomeSection/>
                <PortfolioSection/>
            </main>
        </>

    );
}