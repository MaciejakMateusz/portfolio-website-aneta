import React from "react";
import {Helmet} from "react-helmet";

export const TradingAppProject = () => {

    return (
        <>
            <Helmet>
                <title>Trading App</title>
            </Helmet>
            <div>
                <img className="project-svg"
                     src={`${process.env.PUBLIC_URL}/theme/svg-projects/trading-app.png`}
                     alt={'Trading App'}/>
            </div>
        </>
    );
}