import "./App.css";
import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Articles from "./articles/Articles";
import axios from "axios";
import Search from "./articles/Search";
import Alert from "./layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/About";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //Loads 25 Users On Start

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=2bbf945527be42628aff77dfa4416064"
      );
      setArticles(res.data.articles);
      setLoading(false);
    }
    fetchData();
  }, []);

  //Search Articles

  const searchArticles = async (text) => {
    setLoading(true);

    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${text}&language=en&sortBy=publishedAt&apiKey=2bbf945527be42628aff77dfa4416064`
    );
    setArticles(res.data.articles);
    setLoading(false);
  };

  // Escape Empty String

  const showAlert = (msg, type) => {
    setAlert({ msg, type });

    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return (
                <Fragment>
                  <Search
                    searchArticles={searchArticles}
                    setAlert={showAlert}
                  />
                  <Articles loading={loading} articles={articles} />
                </Fragment>
              );
            }}
          />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
