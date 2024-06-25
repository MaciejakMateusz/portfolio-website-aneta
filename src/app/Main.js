import React from "react";
import {NavHeader} from "./NavHeader";
import {WelcomeSection} from "./WelcomeSection";
import {BackgroundOrnaments} from "./BackgroundOrnaments";
import {PortfolioSection} from "./PortfolioSection";

export const Main = () => {

    return (
        <main className={'main-background'}>
            <BackgroundOrnaments />
            <NavHeader />
            <WelcomeSection />
            <PortfolioSection/>
        </main>
    );
}