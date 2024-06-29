import React from "react";
import {Helmet} from "react-helmet";
import {ReactSVG} from "react-svg";
import {LoadingSpinner} from "../icons/LoadingSpinner";

export const ProjectSVG = ({tabTitle, svgName}) => {
    return (
        <>
            <Helmet>
                <title>{tabTitle}</title>
            </Helmet>
            <div>
                <ReactSVG className="project-svg"
                          src={`${process.env.PUBLIC_URL}/theme/svg-projects/${svgName}.svg`}
                          loading={() => <LoadingSpinner/>}/>
            </div>
        </>

    );
}