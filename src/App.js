import "./App.css";
import SearchAppBar from "./components/SearchAppBar.js";
import { Switch, Route } from "react-router-dom";
import Houses from "./components/Houses.js";
import fetch from "cross-fetch";
import { useState, useEffect } from "react";

function App() {
  const [searchString, setSearchString] = useState();
  const handleSearch = (event) => {
    setSearchString(event.target.value);
    event.target.value = "";
  };

  console.log("Search string: ", searchString);

  const url = "https://anapioficeandfire.com/api/houses/378";
  const [gotData, setGotData] = useState();

  useEffect(() => {
    const getApi = async (url) => {
      const response = await fetch(url);
      //possible to destructure json data for specific field (e.g. URI field) with {fieldname}
      const apiData = await response.json();
      setGotData(apiData);
    };
    getApi(url);
    console.log(searchString);
  }, []);

  return (
    <div>
      <header>
        <SearchAppBar handleSearch={handleSearch} />
      </header>
      <body>
        <Switch>
          <Route path="/houses" render={() => <Houses houseData={gotData} />} />
        </Switch>
      </body>
    </div>
  );
}

export default App;
