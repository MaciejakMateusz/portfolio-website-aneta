import React, {useState} from "react";
import {Helmet} from "react-helmet";

export const EkosortProject = () => {
    const [activeTab, setActiveTab] = useState('hi-fi');

    const renderProject = () => {
        switch (activeTab) {
            case 'hi-fi':
                return (
                    <div>
                        <Helmet>
                            <title>Ekosort HI-FI</title>
                        </Helmet>
                        <img className="project-png"
                             src={`${process.env.PUBLIC_URL}/theme/png-projects/ekosort-hifi.png`}
                             alt={'Ekosort HIFI'}/>
                    </div>
                );
            case 'research':
                return (
                    <div>
                        <Helmet>
                            <title>Ekosort Research</title>
                        </Helmet>
                        <img className="project-png"
                             src={`${process.env.PUBLIC_URL}/theme/png-projects/ekosort-research.png`}
                             alt={'Ekosort Research'}/>
                    </div>
                );
            case 'ideate':
                return (
                    <div>
                        <Helmet>
                            <title>Ekosort Ideate</title>
                        </Helmet>
                        <img className="project-png"
                             src={`${process.env.PUBLIC_URL}/theme/png-projects/ekosort-ideate.png`}
                             alt={'Ekosort Ideate'}/>
                    </div>
                );
            default:
                return <div>HI-FI</div>
        }
    }

    return (
        <>
            <main className={'ekosort-grid'}>
                <div className={'ekosort-navigation-container'}>
                    <nav className={'ekosort-navigation'}>
                        <div className={`nav-tab hi-fi ${activeTab === 'hi-fi' ? 'active' : ''}`}
                             onClick={() => setActiveTab('hi-fi')}>HI-FI
                        </div>
                        <div className={`nav-tab research ${activeTab === 'research' ? 'active' : ''}`}
                             onClick={() => setActiveTab('research')}>Research
                        </div>
                        <div className={`nav-tab ideate ${activeTab === 'ideate' ? 'active' : ''}`}
                             onClick={() => setActiveTab('ideate')}>Ideate
                        </div>
                    </nav>
                </div>
                <div className={'project-part'}>
                    {renderProject()}
                </div>
            </main>
        </>
    );
}