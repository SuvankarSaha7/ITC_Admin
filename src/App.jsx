import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import Workflow from "./components/Dashboard/Workflow/Workflow";
import Entitlement from "./components/Dashboard/Entitlement/Entitlement";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/workflow" element={<Workflow/>}/>
          <Route path="/entitlement" element={<Entitlement/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
