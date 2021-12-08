import React from "react";
import Item from "./Item";
import Spinner from "../layout/Spinner";

const Articles = ({ articles, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='articleStyle'>
        {articles.map((article) => (
          <Item key={article.title} article={article} />
        ))}
      </div>
    );
  }
};

export default Articles;
