import React from "react";
import "./styles/app.css";
import Header from "./components/header";

import Searchbar from "./components/searchbar";
function App() {
  return (
    <div className='App'>
      <Header />
      <Searchbar />
    </div>
  );
}

export default App;
