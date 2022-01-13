import React, {useState} from "react";
import data from "../Data.json"
import "../SearchBar.css";


const StateSearchBar = (props) => {
    const [filteredData, setFilteredData] = useState([]);

    // console.log("dadasdasdasdsadasd")
    console.log(data)
    
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

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter} />
                <div className="searchIcon">
                </div>
            </div>
            {filteredData.length != 0 && (
            <div className="dataResult">
                {filteredData.slice(0, 15).map((value, key) => {
                    return (
                        // <div className="dataItem" href={value.link} target="_blank">
                        <div className="dataItem">
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