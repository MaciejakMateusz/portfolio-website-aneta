import React from 'react';
import '../index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Main} from "../app/Main";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    )
}