import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {Link} from 'react-scroll';

export const NavHeader = () => {
    const {t} = useTranslation();
    const [scrollPos, setScrollPos] = useState(0);
    const [hoveredBtn, setHoveredBtn] = useState(null);
    const [activeBtn, setActiveBtn] = useState('home');
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPos(window.scrollY);
        };

        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateOpacity = () => {
        const maxScroll = 180;
        return Math.min(scrollPos / maxScroll, 1);
    };

    const handleMouseOver = (btn) => {
        setHoveredBtn(btn);
    };

    const handleMouseLeave = () => {
        setHoveredBtn(null);
    };

    const handleClick = (btn) => {
        setActiveBtn(btn);
    };

    const renderIconOnActiveAndHover = (btn) => {
        if (hoveredBtn === btn || activeBtn === btn) {
            switch (btn) {
                case 'home':
                    return <img className={'nav-icon'}
                                style={{left: '-1.8rem'}}
                                src={`${process.env.PUBLIC_URL}/theme/icons/home.svg`}
                                alt={btn}/>;
                case 'portfolio':
                    return <img className={'nav-icon'}
                                style={{left: '-1.5rem'}}
                                src={`${process.env.PUBLIC_URL}/theme/icons/portfolio.svg`}
                                alt={btn}/>;
                case 'experience':
                    return <img className={'nav-icon'}
                                style={{left: '-2rem'}}
                                src={`${process.env.PUBLIC_URL}/theme/icons/experience.svg`}
                                alt={btn}/>;
                case 'contact':
                    return <img className={'nav-icon'}
                                style={{left: '-1.7rem'}}
                                src={`${process.env.PUBLIC_URL}/theme/icons/contact.svg`}
                                alt={btn}/>;
                default:
                    return <img className={'nav-icon'}
                                style={{left: '-1.8rem'}}
                                src={`${process.env.PUBLIC_URL}/theme/icons/home.svg`}
                                alt={btn}/>;
            }
        }
        return null;
    };

    return (
        <nav className="nav-header" style={{background: `rgba(255, 255, 255, ${calculateOpacity()})`}}>
            <div className={'nav-buttons-grid'}>
                <Link to="home"
                      smooth={true}
                      spy={true}
                      offset={0}
                      duration={800}
                      onSetActive={() => handleClick('home')}
                      className={`nav-btn ${activeBtn === 'home' ? 'active' : ''}`}
                      onMouseOver={() => handleMouseOver('home')}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick('home')}>
                    {viewportWidth > 700 ?
                        renderIconOnActiveAndHover('home') :
                        <img className={'nav-icon'}
                             style={{left: '-1px'}}
                             src={`${process.env.PUBLIC_URL}/theme/icons/home.svg`}
                             alt={'home'}/>}
                    <span className={'nav-text'}>Home</span>
                </Link>
                <Link className={`nav-btn ${activeBtn === 'portfolio' ? 'active' : ''}`}
                      to="portfolio-projects"
                      smooth={true}
                      spy={true}
                      offset={-100}
                      duration={800}
                      onSetActive={() => handleClick('portfolio')}
                      onMouseOver={() => handleMouseOver('portfolio')}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick('portfolio')}>
                    {viewportWidth > 700 ?
                        renderIconOnActiveAndHover('portfolio') :
                        <img className={'nav-icon'}
                             style={{left: '-1px'}}
                             src={`${process.env.PUBLIC_URL}/theme/icons/portfolio.svg`}
                             alt={'portfolio'}/>}
                    <span className={'nav-text'}>{t('portfolio')}</span>
                </Link>
                <Link className={`nav-btn ${activeBtn === 'experience' ? 'active' : ''}`}
                      to="experience"
                      smooth={true}
                      spy={true}
                      offset={-50}
                      duration={800}
                      onSetActive={() => handleClick('experience')}
                      onMouseOver={() => handleMouseOver('experience')}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick('experience')}>
                    {viewportWidth > 700 ?
                        renderIconOnActiveAndHover('experience') :
                        <img className={'nav-icon'}
                             style={{left: '-1px'}}
                             src={`${process.env.PUBLIC_URL}/theme/icons/experience.svg`}
                             alt={'experience'}/>}
                    <span className={'nav-text'}>{t('experience')}</span>
                </Link>
                <Link className={`nav-btn ${activeBtn === 'contact' ? 'active' : ''}`}
                      to="contact"
                      smooth={true}
                      spy={true}
                      offset={-120}
                      duration={800}
                      onSetActive={() => handleClick('contact')}
                      onMouseOver={() => handleMouseOver('contact')}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleClick('contact')}>
                    {viewportWidth > 700 ?
                        renderIconOnActiveAndHover('contact') :
                        <img className={'nav-icon'}
                             style={{left: '-1px'}}
                             src={`${process.env.PUBLIC_URL}/theme/icons/contact.svg`}
                             alt={'contact'}/>}
                    <span className={'nav-text'}>{t('contact')}</span>
                </Link>
            </div>
        </nav>
    );
};