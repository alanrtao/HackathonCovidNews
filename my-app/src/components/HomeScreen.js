// import React, { useEffect, useState } from 'react';
import * as React from 'react';
import Map from "./Map"
import SearchBar from './SearchBar';

import './HomeScreen.css';

export default function HomeScreen() {
    return (
        <div>
            <div class="split right">
                <h1 class = "fit"># Check</h1>
                <div class = "fit">
                    <SearchBar />
                </div>
                <div class = "flex bottom">
                    <ul id="news_body">
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                        <li>card 1</li>
                    </ul>
                </div>
            </div>
            <div class="split left"><Map /></div>
        
        </div>
    );
}