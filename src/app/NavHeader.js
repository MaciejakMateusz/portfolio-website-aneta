import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";

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
        <nav
            className="nav-header"
            style={{ background: `rgba(255, 255, 255, ${calculateOpacity()})` }}
        >
            <div className={'nav-buttons-wrapper'}>
                <button className={'nav-btn'}>
                    <span>{t('aboutMe')}</span>
                </button>
                <button className={'nav-btn'}>
                    <span>{t('portfolio')}</span>
                </button>
                <button className={'nav-btn'}>
                    <span>{t('experience')}</span>
                </button>
                <button className={'nav-btn'}>
                    <span>{t('contact')}</span>
                </button>
            </div>
        </nav>
    );
};