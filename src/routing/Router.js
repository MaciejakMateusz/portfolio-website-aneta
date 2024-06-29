import React from 'react';
import '../index.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Main} from "../app/Main";
import {ProjectSVG} from "../app/portfolio/ProjectSVG";
import {useTranslation} from "react-i18next";
import {EkosortProject} from "../app/portfolio/EkosortProject";
import {ProjectPNG} from "../app/portfolio/ProjectPNG";

export const Router = () => {
    const {t} = useTranslation();
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path={'/trading-app'} element={<ProjectPNG tabTitle={'Trading App'} pngName={'trading-app'}/>}/>
                <Route path={'/project-active'} element={<ProjectSVG tabTitle={t('projectActiveName')} svgName={'project-active'}/>}/>
                <Route path={'/trip-finder'} element={<ProjectPNG tabTitle={'Trip Finder'} pngName={'trip-finder'}/>}/>
                <Route path={'/blood-donation'} element={<ProjectSVG tabTitle={t('bloodDonationName')} svgName={'blood-donation'}/>}/>
                <Route path={'/ekosort'} element={<EkosortProject/>}/>
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}