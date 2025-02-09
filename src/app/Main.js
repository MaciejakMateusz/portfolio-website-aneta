import React, {useRef} from "react";
import {NavMenu} from "./navigation/NavMenu";
import {WelcomeSection} from "./home/WelcomeSection";
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
            <main className={'main-background'}>
                <NavMenu homeRef={homeRef} portfolioRef={portfolioRef} expRef={expRef} contactRef={contactRef}/>
                <WelcomeSection ref={homeRef}/>
                <PortfolioSection ref={portfolioRef}/>
                <ExperienceSection ref={expRef}/>
                <ContactSection ref={contactRef}/>
                <Footer/>
            </main>
        </>
    );
}