import React from "react";
import {PortfolioHeader} from "./PortfolioHeader";

export const PortfolioSection = () => {
    return (
        <>
            <section className={'portfolio-header-section'}>
                <PortfolioHeader/>
            </section>
            <section className={'portfolio-content-section'}>
                <div className={'portfolio-projects-grid'}>
                    <div className={'portfolio-project-photo'}
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/theme/images/mockup-trading.svg)`}}/>
                    <div className={'portfolio-project-text'}>
                        <p className={'project-name'}>Trading App</p>
                        <p className={'project-subtitle'}>Interaktywna giełda w Twojej kieszeni</p>
                        <p className={'project-description'}>
                            Zaprojektowana w widokach landscape i portrait, aplikacja umożliwia intuicyjne dodawanie,
                            edycję i modyfikację linii trendu. Dzięki nowoczesnemu designowi i zaawansowanym funkcjom
                            korzystanie z platformy staje się wyjątkowo proste i przyjemne, zapewniając najwyższy poziom
                            funkcjonalności.
                        </p>
                        <button className={'see-more-button'}>Zobacz więcej ></button>
                    </div>
                    <div className={'portfolio-project-photo'}
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/theme/images/mockup-active.svg)`}}/>
                    <div className={'portfolio-project-text'}>
                        <p className={'project-name'}>Trading App</p>
                        <p className={'project-subtitle'}>Interaktywna giełda w Twojej kieszeni</p>
                        <p className={'project-description'}>
                            Zaprojektowana w widokach landscape i portrait, aplikacja umożliwia intuicyjne dodawanie,
                            edycję i modyfikację linii trendu. Dzięki nowoczesnemu designowi i zaawansowanym funkcjom
                            korzystanie z platformy staje się wyjątkowo proste i przyjemne, zapewniając najwyższy poziom
                            funkcjonalności.
                        </p>
                        <button className={'see-more-button'}>Zobacz więcej ></button>
                    </div>
                    <div className={'portfolio-project-photo'}
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/theme/images/mockup-find-trip.svg)`}}/>
                    <div className={'portfolio-project-text'}>
                        <p className={'project-name'}>Trading App</p>
                        <p className={'project-subtitle'}>Interaktywna giełda w Twojej kieszeni</p>
                        <p className={'project-description'}>
                            Zaprojektowana w widokach landscape i portrait, aplikacja umożliwia intuicyjne dodawanie,
                            edycję i modyfikację linii trendu. Dzięki nowoczesnemu designowi i zaawansowanym funkcjom
                            korzystanie z platformy staje się wyjątkowo proste i przyjemne, zapewniając najwyższy poziom
                            funkcjonalności.
                        </p>
                        <button className={'see-more-button'}>Zobacz więcej ></button>
                    </div>
                    <div className={'portfolio-project-photo'}
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/theme/images/mockup-blood-donations.svg)`}}/>
                    <div className={'portfolio-project-text'}>
                        <p className={'project-name'}>Trading App</p>
                        <p className={'project-subtitle'}>Interaktywna giełda w Twojej kieszeni</p>
                        <p className={'project-description'}>
                            Zaprojektowana w widokach landscape i portrait, aplikacja umożliwia intuicyjne dodawanie,
                            edycję i modyfikację linii trendu. Dzięki nowoczesnemu designowi i zaawansowanym funkcjom
                            korzystanie z platformy staje się wyjątkowo proste i przyjemne, zapewniając najwyższy poziom
                            funkcjonalności.
                        </p>
                        <button className={'see-more-button'}>Zobacz więcej ></button>
                    </div>
                </div>
            </section>
        </>
    );

}