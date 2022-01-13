// import React, { useEffect, useState } from 'react';
import * as React from 'react';
import Map from "./Map"
import SearchBar from './SearchBar';
import Newsformat from "./Newsformat";


import './HomeScreen.css';

export default function HomeScreen() {
    return (
        <div>
            <div class="split right">
                <h1 class = "fit"># Check</h1>
                <div class = "fit">
                    <SearchBar />
                </div>
                <div class = "flex bottom" id="news_body">
                    <Newsformat /> <Newsformat /> <Newsformat /> <Newsformat /> <Newsformat /> <Newsformat />
                </div>
            </div>
            <div class="split left"><Map /></div>
        
        </div>
    );
}