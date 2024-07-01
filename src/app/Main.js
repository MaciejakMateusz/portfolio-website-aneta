import React, {useRef} from "react";
import {NavHeader} from "./navigation/NavHeader";
import {WelcomeSection} from "./home/WelcomeSection";
import {BackgroundOrnaments} from "./home/BackgroundOrnaments";
import {PortfolioSection} from "./portfolio/PortfolioSection";
import {Helmet} from "react-helmet";
import {ExperienceSection} from "./experience/ExperienceSection";
import {ContactSection} from "./contact/ContactSection";
import {Footer} from "./footer/Footer";

export const Main = () => {
    const homeRef = useRef();
    const portfolioRef = useRef();
    const expRef = useRef();
    const contactRef = useRef();

    return (
        <>
            <Helmet>
                <title>Portfolio</title>
            </Helmet>
            <BackgroundOrnaments/>
            <main className={'main-background'}>
                <NavHeader homeRef={homeRef} portfolioRef={portfolioRef} expRef={expRef} contactRef={contactRef}/>
                <WelcomeSection ref={homeRef}/>
                <PortfolioSection ref={portfolioRef}/>
                <ExperienceSection ref={expRef}/>
                <ContactSection ref={contactRef}/>
                <Footer/>
            </main>
        </>
    );
}