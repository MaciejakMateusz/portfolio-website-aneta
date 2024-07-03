import React from "react";

export const CertificateDialog = ({fileName, setHidden, hidden, orientation}) => {

    const hideDialog = () => {
        setHidden(true);
    }

    return (
        <div className={`dialog-overlay ${hidden ? '' : 'show'}`}
             id="dialogOverlay"
             onClick={hideDialog}>
            <img className={`certificate-dialog ${orientation}`}
                 alt={fileName}
                 src={`${process.env.PUBLIC_URL}/theme/certificates/${fileName}`}
                 onClick={hideDialog}/>
        </div>
    );
}