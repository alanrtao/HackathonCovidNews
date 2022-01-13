import HomeScreen from "./components/HomeScreen";
import { useEffect } from "react";
import { getArticlesByState, getAllArticles } from "./components/Database"

// import Map from "./components/Map";

function App() {
  /* Testing database fetching and print to console */
  useEffect(() => {
    getArticlesByState('Florida').then((snapshot) => {
        console.log(snapshot.val());
    });

    getAllArticles().then((snapshot) => {
        console.log(snapshot.val());
    });
  }, []);

  return (
    <div className="App">
      <HomeScreen/>
    </div>
  );
}

export default App;
