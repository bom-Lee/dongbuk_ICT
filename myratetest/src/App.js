import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Review from "./Review";
import NotFound from "./NotFound";


function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/review/:week_day' element={<Review />} />
      <Route path='/NotFound' element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
