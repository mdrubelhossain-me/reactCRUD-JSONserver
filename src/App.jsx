/* eslint-disable react/jsx-no-duplicate-props */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployListing from "./Components/EmployListing/EmployListing";
import ListCreate from "./Components/ListCreate/ListCreate";
import ListEdit from "./Components/ListEdit/ListEdit";
import ListDetails from "./Components/ListDetails/ListDetails";

const App = () => {
  return (
    <div>
      <h2 className="pt-3 pb-4 text-center">React JS CRUD Operation (JSON Server)</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployListing/>}></Route>
          <Route path="/list/create" element={<ListCreate/>}></Route>
          <Route path="/list/edit/:id" element={<ListEdit/>}></Route>
          <Route path="/list/details/:id" element={<ListDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
