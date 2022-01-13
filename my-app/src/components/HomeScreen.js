import React, { useEffect, useState } from 'react';

import Map from "./Map"
import Bar from "./RightBar/Bar"
// import * from "./ViewState"

const HomeScreen = (props) =>{
    const [viewState, setViewState] = useState({})

    return(
        <div>
            <div> Oakyd</div>
            <Bar />
            <Map viewState={viewState}/>
        </div> 
    )
}
export default HomeScreen;