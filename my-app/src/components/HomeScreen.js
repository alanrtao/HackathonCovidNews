import React, { useEffect, useState } from 'react';
import './HomeScreen.css';

import Map from "./Map"

const HomeScreen = (props) =>{
    return(
        <div>
            <div> Oakyd</div>
            <Map />
        </div> 
    )
}
export default HomeScreen;