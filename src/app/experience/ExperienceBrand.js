import React from "react";

export const ExperienceBrand = ({wrapperType, imageName, alt}) => {
    return (
        <div className={`brand-wrapper ${wrapperType}`}>
            <img className={'experience-brand'}
                 alt={alt}
                 src={`${process.env.PUBLIC_URL}/theme/images/${imageName}`}/>
        </div>
    );
}