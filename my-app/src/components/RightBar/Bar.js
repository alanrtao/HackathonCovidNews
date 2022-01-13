import React, { useEffect, useState } from 'react';
import Newsformat from './Newsformat';
import SearchBar from './SearchBar';

const Bar = (props) =>{
    return(
        <div>
            <h1 class = "fit"># Check</h1>
                <div class = "fit">
                    <SearchBar />
                </div>
                <div class = "flex bottom" id="news_body">
                    {[...Array(10)].map((x, i) =>
                        <Newsformat key={i} />
                    )}
                </div>
        </div> 
    )
}
export default Bar;