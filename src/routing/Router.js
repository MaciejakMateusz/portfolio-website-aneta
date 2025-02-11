import React from 'react';
import '../index.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Main} from "../app/Main";
import {useTranslation} from "react-i18next";
import {EkosortProject} from "../app/portfolio/EkosortProject";
import {ProjectPNG} from "../app/portfolio/ProjectPNG";

export const Router = () => {
    const {t} = useTranslation();
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path={'/car-spec-hub'} element={<ProjectPNG tabTitle={'CarSpec Hub'} pngName={'car-spec-hub'}/>}/>
                <Route path={'/trading-app'} element={<ProjectPNG tabTitle={'Trading App'} pngName={'trading-app'}/>}/>
                <Route path={'/project-active'} element={<ProjectPNG tabTitle={t('projectActiveName')} pngName={'project-active'}/>}/>
                <Route path={'/trip-finder'} element={<ProjectPNG tabTitle={'Trip Finder'} pngName={'trip-finder'}/>}/>
                <Route path={'/blood-donation'} element={<ProjectPNG tabTitle={t('bloodDonationName')} pngName={'blood-donation'}/>}/>
                <Route path={'/ekosort'} element={<EkosortProject/>}/>
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}