import React from "react";

export const ContactButton = ({iconName, text, subClass, href}) => {

    const handleClick = () => {
        if (subClass === 'phone' || subClass === 'email') {
            window.location.href = href;
        } else if (subClass === 'linkedin') {
            window.open(href, '_blank');
        }
    }

    return (
        <div onClick={handleClick} className={`contact-button-frame ${subClass}`}>
            <img src={`${process.env.PUBLIC_URL}/theme/icons/${iconName}`}
                 alt={iconName}
                 className={'contact-icon'}/>
            <span className={'contact-icon-text'}>{text}</span>
        </div>
    );
}