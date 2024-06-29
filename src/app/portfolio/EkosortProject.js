import React, {useState} from "react";
import {Helmet} from "react-helmet";
import {ReactSVG} from "react-svg";
import {LoadingSpinner} from "../icons/LoadingSpinner";

export const EkosortProject = () => {
    const [activeTab, setActiveTab] = useState('hi-fi');

    const renderProject = () => {
        switch (activeTab) {
            case 'hi-fi':
                return (
                    <div>
                        <img className="project-svg"
                             src={`${process.env.PUBLIC_URL}/theme/svg-projects/ekosort-hifi.png`}
                             alt={'Ekosort HIFI'}/>
                    </div>
                );
            case 'research':
                return (
                    <div>
                        <ReactSVG className="project-svg"
                                  src={`${process.env.PUBLIC_URL}/theme/svg-projects/ekosort-research.svg`}
                                  loading={() => <LoadingSpinner/>}/>
                    </div>
                );
            case 'ideate':
                return (
                    <div>
                        <ReactSVG className="project-svg"
                                  src={`${process.env.PUBLIC_URL}/theme/svg-projects/ekosort-ideate.svg`}
                                  loading={() => <LoadingSpinner/>}/>
                    </div>
                );
            default:
                return <div>HI-FI</div>
        }
    }

    return (
        <>
            <Helmet>
                <title>Ekosort</title>
            </Helmet>
            <main className={'ekosort-grid'}>
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
                <div className={'project-part'}>
                    {renderProject()}
                </div>
            </main>
        </>
    );
}