import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ searchArticles, setAlert }) => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("Showing today's top stories");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchArticles(text);
      setResult(`Showing results for: '${text}'`);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);
  return (
    <div className='all-center'>
      <form
        onSubmit={onSubmit}
        className='form'
        style={{ display: "inline-block", width: "100%" }}
      >
        <input
          type='text'
          name='search'
          placeholder="Search a topic (eg. 'Elon Musk')"
          value={text}
          onChange={onChange}
          result={result}
        />
        <input type='submit' value='Search' className='btn btn-dark center' />
      </form>
      <h3 className='results'>{result}</h3>
    </div>
  );
};

Search.propTypes = {
  searchArticles: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default Search;
