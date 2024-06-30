import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Link, scroller} from 'react-scroll';
import {ReactSVG} from "react-svg";

export const NavHeader = () => {
    const {t} = useTranslation();
    const [scrollPos, setScrollPos] = useState(0);
    const [vh, setVh] = useState(typeof Number);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        const handleResize = () => {
            setVh(window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        scroller.scrollTo('home', {
            smooth: true,
            offset: 0,
            duration: 800,
        });
    }, []);

    const calculateOpacity = () => {
        const maxScroll = 160;
        return Math.min(scrollPos / maxScroll, 1);
    };

    const determineVhBasedOffset = (linkName) => {
        switch (linkName) {
            case 'home':
                if (vh > 500) {
                    return 0;
                } else if (vh < 500 && vh > 350) {
                    return 120;
                } else if (vh < 350) {
                    return 120;
                }
                break;
            case 'portfolio':
                if (vh > 500) {
                    return -100;
                } else if (vh < 500 && vh > 350) {
                    return 0;
                } else if (vh < 350) {
                    return 50;
                }
                break;
            case 'experience':
                if (vh > 500) {
                    return -70;
                } else if (vh < 500 && vh > 350) {
                    return 0;
                } else if (vh < 350) {
                    return 100;
                }
                break;
            case 'contact':
                if (vh > 500) {
                    return -215;
                } else if (vh < 500 && vh > 350) {
                    return -50;
                } else if (vh < 350) {
                    return -40;
                }
                break;
            default:
                return 0;
        }
    }

    return (
        <nav className="nav-header" style={{background: `rgba(255, 255, 255, ${calculateOpacity()})`}}>
            <div className={'nav-buttons-grid'}>
                <Link className={`nav-btn`}
                      activeClass={'active'}
                      to="home"
                      smooth={true}
                      spy={true}
                      offset={determineVhBasedOffset('home')}
                      duration={800}>
                    <ReactSVG src={`${process.env.PUBLIC_URL}/theme/icons/home.svg`} className={'nav-icon home'}/>
                    <span className={'nav-text'}>Home</span>
                </Link>
                <Link className={`nav-btn`}
                      activeClass={'active'}
                      to="portfolio-projects"
                      smooth={true}
                      spy={true}
                      offset={determineVhBasedOffset('portfolio')}
                      duration={800}>
                    <ReactSVG src={`${process.env.PUBLIC_URL}/theme/icons/portfolio.svg`}
                              className={'nav-icon portfolio'}/>
                    <span className={'nav-text'}>{t('portfolio')}</span>
                </Link>
                <Link className={`nav-btn`}
                      activeClass={'active'}
                      to="experience"
                      smooth={true}
                      spy={true}
                      offset={determineVhBasedOffset('experience')}
                      duration={800}>
                    <ReactSVG src={`${process.env.PUBLIC_URL}/theme/icons/experience.svg`}
                              className={'nav-icon experience'}/>
                    <span className={'nav-text'}>{t('experience')}</span>
                </Link>
                <Link className={`nav-btn`}
                      activeClass={'active'}
                      to="contact"
                      smooth={true}
                      spy={true}
                      offset={determineVhBasedOffset('contact')}
                      duration={800}>
                    <ReactSVG src={`${process.env.PUBLIC_URL}/theme/icons/contact.svg`} className={'nav-icon contact'}/>
                    <span className={'nav-text'}>{t('contact')}</span>
                </Link>
            </div>
        </nav>
    );
};