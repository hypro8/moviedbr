import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  console.log("error: ", error);

  return (
    <section className="search-section">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>search movies</h2>
        <input
          className="form-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={error.show ? "error display" : "error"}>
          {error.msg}
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
