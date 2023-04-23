import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Add from "./component/Add";
import WatchList from "./component/WatchList";
import Watched from "./component/Watched";
import ContextProvider from "./component/context/GlobalContext";
import "./App.css";
const App = () => {
  return (
    <ContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
