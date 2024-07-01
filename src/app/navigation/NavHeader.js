import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {ReactSVG} from "react-svg";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver";

export const NavHeader = ({homeRef, portfolioRef, expRef, contactRef}) => {
    const {t} = useTranslation();
    const [scrollPos, setScrollPos] = useState(0);
    const [activeBtn, setActiveBtn] = useState('home');
    const isWideScreen = window.innerWidth > 1000;
    const intersectionOptions = {
        rootMargin: isWideScreen ? '0px' : '0px',
        threshold: isWideScreen ? 0.1 : 0.1
    };

    const homeVisible = useIntersectionObserver(homeRef, intersectionOptions);
    const portfolioVisible = useIntersectionObserver(portfolioRef, intersectionOptions);
    const expVisible = useIntersectionObserver(expRef, intersectionOptions);
    const contactVisible = useIntersectionObserver(contactRef, intersectionOptions);

    useEffect(() => {
        if (homeVisible) {
            setActiveBtn('home');
        } else if (portfolioVisible) {
            setActiveBtn('portfolio-projects');
        } else if (expVisible) {
            setActiveBtn('experience');
        } else if (contactVisible) {
            setActiveBtn('contact');
        }
    }, [homeVisible, portfolioVisible, expVisible, contactVisible]);

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
        const maxScroll = 160;
        return Math.min(scrollPos / maxScroll, 1);
    };

    const handleScrollTo = (ref, offset, btnName) => {
        setActiveBtn(btnName);
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop + offset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="nav-header" style={{background: `rgba(255, 255, 255, ${calculateOpacity()})`}}>
            <div className={'nav-buttons-grid'}>
                <div className={`nav-btn ${activeBtn === 'home' ? 'active' : ''}`}
                     onClick={() => handleScrollTo(homeRef, 0, 'home')}>
                    <ReactSVG src={`${process.env.PUBLIC_URL}/theme/icons/home.svg`} className={'nav-icon home'}/>
                    <div className={'nav-underline home'}/>
                    <span className={'nav-text'}>Home</span>
                </div>
                <div className={`nav-btn ${activeBtn === 'portfolio-projects' ? 'active' : ''}`}
                     onClick={() => handleScrollTo(portfolioRef, -100, 'portfolio-projects')}>
                    <div className={'nav-underline portfolio'}/>
                    <ReactSVG src={`${process.env.PUBLIC_URL}/theme/icons/portfolio.svg`}
                              className={'nav-icon portfolio'}/>
                    <span className={'nav-text'}>{t('portfolio')}</span>
                </div>
                <div className={`nav-btn ${activeBtn === 'experience' ? 'active' : ''}`}
                     onClick={() => handleScrollTo(expRef, -50, 'experience')}>
                    <div className={'nav-underline experience'}/>
                    <ReactSVG src={`${process.env.PUBLIC_URL}/theme/icons/experience.svg`}
                              className={'nav-icon experience'}/>
                    <span className={'nav-text'}>{t('experience')}</span>
                </div>
                <div className={`nav-btn ${activeBtn === 'contact' ? 'active' : ''}`}
                     onClick={() => handleScrollTo(contactRef, -100, 'contact')}>
                    <div className={'nav-underline contact'}/>
                    <ReactSVG src={`${process.env.PUBLIC_URL}/theme/icons/contact.svg`} className={'nav-icon contact'}/>
                    <span className={'nav-text'}>{t('contact')}</span>
                </div>
            </div>
        </nav>
    );
};
