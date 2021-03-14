import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import NewEntry from "./components/NewEntry";
import Entry from "./components/Entry";

function App() {

  return (    
    <BrowserRouter>
      <Navbar />
      <Switch>       
        <Route path="/new-entry">
          <NewEntry />
        </Route>           
        <Route path="/entry/:id">
          <Entry />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>   
  );
}

export default App;
