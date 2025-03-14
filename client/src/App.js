import React from "react";
import "./App.css"; // Optional custom styling
import Navbar from "./components/Navbar"; // Example component
import SearchForm from "./components/SearchForm"; // Example component

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchForm />
      <h1>Welcome to the Book Search App!</h1>
    </div>
  );
}

export default App;
