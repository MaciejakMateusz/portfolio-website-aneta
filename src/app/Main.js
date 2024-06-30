import React from "react";
import {NavHeader} from "./navigation/NavHeader";
import {WelcomeSection} from "./home/WelcomeSection";
import {BackgroundOrnaments} from "./home/BackgroundOrnaments";
import {PortfolioSection} from "./portfolio/PortfolioSection";
import {Helmet} from "react-helmet";
import {ExperienceSection} from "./experience/ExperienceSection";
import {ContactSection} from "./contact/ContactSection";
import {Footer} from "./footer/Footer";

export const Main = () => {

    return (
        <>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <BackgroundOrnaments/>
            <main className={'main-background'}>
                <NavHeader/>
                <WelcomeSection/>
                <PortfolioSection/>
                <ExperienceSection/>
                <ContactSection/>
                <Footer/>
            </main>
        </>
    );
}