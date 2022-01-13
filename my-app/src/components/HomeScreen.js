// import React, { useEffect, useState } from 'react';
import * as React from 'react';
import Map from "./Map"
import SearchBar from './SearchBar';
import Newsformat from "./Newsformat";
import StateData from "./Data.json";

import './HomeScreen.css';

export default function HomeScreen() {
    return (
        <div>
            <div class="split right">
                <div class="content">
                    <h1 class = "fit">Covid News</h1>
                    <div class = "fit">
                        <SearchBar placeholder="Look for ..." data={StateData} />
                    </div>
                    <div class = "flex bottom" id="news_body">
                        <Newsformat /> <Newsformat /> <Newsformat /> <Newsformat /> <Newsformat /> <Newsformat />
                    </div>
                </div>
            </div>
            <div class="split left"><Map /></div>
        </div>
    );
}