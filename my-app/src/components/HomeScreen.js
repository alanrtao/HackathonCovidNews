import React, { useEffect, useState } from 'react';

import Map from "./Map"
import Bar from "./RightBar/Bar"

import * as View from "./ViewState"

import '../HomeScreen.css';

const HomeScreen = (props) =>{
    const [viewState, setViewState] = useState(View.INITIAL_VIEW_STATE)

    return(
        <div>
            <div class="split right">
                <div class = "content">
                    <Bar setViewState={setViewState}/>
                </div>
            </div>
            <div class="split left">
                <Map viewState={viewState}/>
            </div>
        </div>
    )
}
export default HomeScreen;

