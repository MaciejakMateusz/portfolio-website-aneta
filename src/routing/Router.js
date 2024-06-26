import React from 'react';
import '../index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from "../app/Main";
import {TradingApp} from "../app/svg-projects/TradingApp";
import {ProjectActive} from "../app/svg-projects/ProjectActive";
import {TripFinder} from "../app/svg-projects/TripFinder";
import {BloodDonation} from "../app/svg-projects/BloodDonation";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path={'/trading-app'} element={<TradingApp />}/>
                <Route path={'/project-active'} element={<ProjectActive />}/>
                <Route path={'/trip-finder'} element={<TripFinder />}/>
                <Route path={'/blood-donation'} element={<BloodDonation />}/>
            </Routes>
        </BrowserRouter>
    )
}