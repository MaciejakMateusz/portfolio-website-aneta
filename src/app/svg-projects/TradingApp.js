import React from "react";
import {Helmet} from "react-helmet";

export const TradingApp = () => {
    return (
        <>
            <Helmet>
                <title>Trading App</title>
            </Helmet>
            <img className="project-svg" src={process.env.PUBLIC_URL + '/theme/svg-projects/trading-app.svg'}
                 alt={'Trading App'}/>
        </>
    );
}