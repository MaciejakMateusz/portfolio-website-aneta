import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Link} from 'react-scroll'
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
        <nav className="nav-header"
             style={{ background: `rgba(255, 255, 255, ${calculateOpacity()})` }}>
            <div className={'nav-buttons-wrapper'}>
                <button className={'nav-btn'}>
                    <Link activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={800}>
                        Home
                    </Link>
                </button>
                <button className={'nav-btn'}>
                    <Link activeClass="active"
                          to="portfolio-projects"
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={800}>
                        {t('portfolio')}
                    </Link>
                </button>
                <button className={'nav-btn'}>
                    <Link activeClass="active"
                          to="experience"
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={800}>
                        {t('experience')}
                    </Link>
                </button>
                <button className={'nav-btn'}>
                    <span>{t('contact')}</span>
                </button>
            </div>
        </nav>
    );
};