import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserTable from "./components/UserTable";
import UserDetails from "./components/UserDetails";
import './App.css';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserTable />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
   </Provider>
  );
}

export default App;
