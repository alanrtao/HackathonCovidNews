import React, { useEffect, useState } from 'react';

import Map from "./Map"
import Bar from "./RightBar/Bar"
import StateSearchBar from "./StateSearchBar"

import * as View from "./ViewState"

import '../HomeScreen.css';

const HomeScreen = (props) =>{
    const [viewState, setViewState] = useState(View.INITIAL_VIEW_STATE)
    const [name, setName] = useState("")
    
    return(
        <div>
            <StateSearchBar setViewState={setViewState} setName={setName}/>
            <div class="split right">
                <Bar name={name}/>
            </div>
            <div class="split left">
                <Map viewState={viewState}/>
            </div>
        </div>
    )
}
export default HomeScreen;

