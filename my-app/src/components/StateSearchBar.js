import React, {useState} from "react";

import * as View from "./ViewState"

import data from "../Data.json"
import "../SearchBar.css";

const StateSearchBar = (props) => {
    const [filteredData, setFilteredData] = useState([]);

    const placeholder="Look for ..."

    const handleFilter = (event) => {
       const searchWord = event.target.value
       const newFilter = data.filter((value) => {
           return value.name.toLowerCase().includes(searchWord.toLowerCase());
       });

       if (searchWord === "") {
           setFilteredData([]);
       } else {
        setFilteredData(newFilter);
       }
    };

    const handleOnClick = (abbr,name) =>{
        const viewName = abbr + "_ViewState"
        props.setViewState(View[viewName])
        props.setName(name)
        setFilteredData([])
        // const 
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
            </div>
            {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                        // <div className="dataItem" href={value.link} target="_blank">
                        <div className="dataItem" onClick={() => handleOnClick(value.abbreviation,value.name)}>
                            <p>{value.name}</p>
                        </div>
                    );
                })}
            </div>
            )}
        </div>
    );
}

export default StateSearchBar;