import React from "react";
import {Helmet} from "react-helmet";

export const ProjectPNG = ({tabTitle, pngName}) => {

    return (
        <>
            <Helmet>
                <title>{tabTitle}</title>
            </Helmet>
            <div>
                <img className="project-png"
                     src={`${process.env.PUBLIC_URL}/theme/svg-projects/${pngName}.png`}
                     alt={pngName}/>
            </div>
        </>
    );
}