import React, { useEffect, useState } from 'react';
import Newsformat from './Newsformat';
import { getArticlesByState } from "../Database"
import StateSearchBar from "../StateSearchBar"

const Bar = (props) =>{
    // articles is list of article objects with keys:
    // Title, Link, Date
    const [articles, setArticles] = useState([]);
    console.log(props.name)
    // get articles by state, Washington is placeholder for now
    useEffect(() => {
        if(props.name != ""){
            setArticles([])
            getArticlesByState(props.name).then((snapshot) => {
                const data = snapshot.val();
                for (const article in data) {
                    setArticles((oldArray) => [...oldArray, data[article]]);
                }
            });
        }
    }, [props.name]);

    return(
        <div>
            <h1 class = "fit"># Check</h1>
                <div class = "fit">
                    <StateSearchBar setName={props.setName} setViewState={props.setViewState}/>
                </div>
                <div class = "flex bottom" id="news_body">
                    {articles.length > 0 && articles.map((article, i) =>
                        <Newsformat {...article} key={i} />
                    )}
                </div>
        </div> 
    )
}
export default Bar;