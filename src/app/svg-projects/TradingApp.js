import React from "react";
import {Helmet} from "react-helmet";
import {ReactSVG} from "react-svg";

export const TradingApp = () => {
    return (
        <>
            <Helmet>
                <title>Trading App</title>
            </Helmet>
            <ReactSVG className="project-svg" src={process.env.PUBLIC_URL + '/theme/svg-projects/trading-app.svg'}/>
        </>
    );
}