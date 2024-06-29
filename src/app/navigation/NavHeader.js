import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Link} from 'react-scroll';
import {ReactSVG} from "react-svg";

export const NavHeader = () => {
    const {t} = useTranslation();
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateOpacity = () => {
        const maxScroll = 180;
        return Math.min(scrollPos / maxScroll, 1);
    };

    return (
        <nav className="nav-header" style={{background: `rgba(255, 255, 255, ${calculateOpacity()})`}}>
            <div className={'nav-buttons-grid'}>
                <Link className={`nav-btn`}
                      activeClass={'active'}
                      to="home"
                      smooth={true}
                      spy={true}
                      offset={0}
                      duration={800}>
                    <ReactSVG src={`${process.env.PUBLIC_URL}/theme/icons/home.svg`} className={'nav-icon home'}/>
                    <span className={'nav-text'}>Home</span>
                </Link>
                <Link className={`nav-btn`}
                      activeClass={'active'}
                      to="portfolio-projects"
                      smooth={true}
                      spy={true}
                      offset={-100}
                      duration={800}>
                    <img className={'nav-icon portfolio'}
                         src={`${process.env.PUBLIC_URL}/theme/icons/portfolio.svg`}
                         alt={'portfolio'}/>
                    <span className={'nav-text'}>{t('portfolio')}</span>
                </Link>
                <Link className={`nav-btn`}
                      activeClass={'active'}
                      to="experience"
                      smooth={true}
                      spy={true}
                      offset={-50}
                      duration={800}>
                    <img className={'nav-icon experience'}
                         src={`${process.env.PUBLIC_URL}/theme/icons/experience.svg`}
                         alt={'experience'}/>
                    <span className={'nav-text'}>{t('experience')}</span>
                </Link>
                <Link className={`nav-btn`}
                      activeClass={'active'}
                      to="contact"
                      smooth={true}
                      spy={true}
                      offset={-120}
                      duration={800}>
                    <img className={'nav-icon contact'}
                         src={`${process.env.PUBLIC_URL}/theme/icons/contact.svg`}
                         alt={'contact'}/>
                    <span className={'nav-text'}>{t('contact')}</span>
                </Link>
            </div>
        </nav>
    );
};