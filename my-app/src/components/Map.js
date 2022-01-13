import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import React, { useEffect, useState } from 'react';

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZGl3bGl1IiwiYSI6ImNrdHQ1M3hjdTFuZWcycXBxczAyYnRud3EifQ.WUk5cILDRQQNOaae60Hb9A";

// export const INITIAL_VIEW_STATE = {
//     longitude: -98.4842,
//     latitude: 39.0119,
//     zoom: 4,
//     pitch: 0,
//     bearing: 0
// };

const Map = (props) =>{

    const handleClick = (evt) =>{
        console.log(evt);
    }

    return(
        <DeckGL
          initialViewState={props.viewState}
          controller={true}
          onClick={handleClick}
        >
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
    )
}
export default Map;