import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver";

export const NavMenu = ({homeRef, portfolioRef, expRef, contactRef}) => {
    const {t} = useTranslation();
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
        <nav className="nav-header">
            <div className={'nav-buttons-container'}>
                <div className={'nav-buttons-wrapper'}>
                    <span className={`nav-btn spaced ${activeBtn === 'home' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(homeRef, 0, 'home')}>
                    <span className={'nav-text'}>Home</span>
                </span>
                    <span className={`nav-btn spaced ${activeBtn === 'portfolio-projects' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(portfolioRef, -100, 'portfolio-projects')}>
                    <span className={'nav-text'}>{t('portfolio')}</span>
                </span>
                    <span className={`nav-btn spaced ${activeBtn === 'experience' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(expRef, -50, 'experience')}>
                    <span className={'nav-text'}>{t('experience')}</span>
                </span>
                    <span className={`nav-btn ${activeBtn === 'contact' ? 'active' : ''}`}
                          onClick={() => handleScrollTo(contactRef, -100, 'contact')}>
                    <span className={'nav-text'}>{t('contact')}</span>
                </span>
                </div>
            </div>
        </nav>
    );
};
