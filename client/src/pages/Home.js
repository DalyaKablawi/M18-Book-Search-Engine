import React from "react";
import SearchForm from "../components/SearchForm";
import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Book Search App</h1>
      <SearchForm />
      <BookCard />
    </div>
  );
};

export default Home;
