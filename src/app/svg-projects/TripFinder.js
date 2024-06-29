import React from "react";
import {Helmet} from "react-helmet";
import {ReactSVG} from "react-svg";

export const TripFinder = () => {
    return (
        <>
            <Helmet>
                <title>Trip Finder</title>
            </Helmet>
            <ReactSVG className="project-svg" src={process.env.PUBLIC_URL + '/theme/svg-projects/trip-finder.svg'}/>
        </>
    );
}