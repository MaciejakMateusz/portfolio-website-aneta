import React, {forwardRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {ExperienceBrand} from "./ExperienceBrand";
import {CertificateDialog} from "../CertificateDialog";

export const ExperienceSection = forwardRef((props, ref) => {
    const {t} = useTranslation();
    const [dialogHidden, setDialogHidden] = useState(true);
    const [fileName, setFileName] = useState('');
    const [orientation, setOrientation] = useState('horizontal');

    const renderCertificateDialog = (fileName, orientation) => {
        setDialogHidden(false);
        setFileName(fileName);
        setOrientation(orientation)
    }

    return (
        <section className={'experience-section'} id={'experience'} ref={ref}>
            <p className={'experience-p'}>{t('experience')}</p>
            <p className={'experience-description'}>{t('experienceDescription')}</p>
            <div className={'experience-brands-grid'}>
                <ExperienceBrand wrapperType={'a'} imageName={'softie.gif'} alt={'Softie'}/>
                <ExperienceBrand wrapperType={'b'} imageName={'akademiaUXUI.png'} alt={'Akademia UXUI'}/>
            </div>
            <div className={'certificates-container'}>
                <div className={'certificates-grid'}>
                    <div className={'certificate a'}>
                        <img className={'certificate-image horizontal'}
                             alt={'Certificate'}
                             src={`${process.env.PUBLIC_URL}/theme/certificates/certificate-professional.jpeg`}
                             onClick={() => renderCertificateDialog('certificate-professional.jpeg', 'horizontal')}/>
                    </div>
                    <div className={'certificate b'}>
                        <img className={'certificate-image vertical'}
                             alt={'Certificate'}
                             src={`${process.env.PUBLIC_URL}/theme/certificates/diploma-professional.jpeg`}
                             onClick={() => renderCertificateDialog('diploma-professional.jpeg', 'vertical')}/>
                    </div>
                    <div className={'certificate c'}>
                        <img className={'certificate-image horizontal'}
                             alt={'Certificate'}
                             src={`${process.env.PUBLIC_URL}/theme/certificates/ux-certificate.jpg`}
                             onClick={() => renderCertificateDialog('ux-certificate.jpg', 'horizontal')}/>
                    </div>
                </div>
            </div>
            {dialogHidden ? null : <CertificateDialog fileName={fileName}
                                                      setHidden={setDialogHidden}
                                                      hidden={dialogHidden}
                                                      orientation={orientation}/>}
        </section>
    );
});