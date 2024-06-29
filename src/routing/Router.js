import React from 'react';
import '../index.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Main} from "../app/Main";
import {ProjectSVG} from "../app/portfolio/ProjectSVG";
import {useTranslation} from "react-i18next";
import {EkosortProject} from "../app/portfolio/EkosortProject";
import {TradingAppProject} from "../app/portfolio/TradingAppProject";

export const Router = () => {
    const {t} = useTranslation();
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path={'/trading-app'} element={<TradingAppProject/>}/>
                <Route path={'/project-active'} element={<ProjectSVG tabTitle={t('projectActiveName')} svgName={'project-active'}/>}/>
                <Route path={'/trip-finder'} element={<ProjectSVG tabTitle={'Trip Finder'} svgName={'trip-finder'}/>}/>
                <Route path={'/blood-donation'} element={<ProjectSVG tabTitle={t('bloodDonationName')} svgName={'blood-donation'}/>}/>
                <Route path={'/ekosort'} element={<EkosortProject/>}/>
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}