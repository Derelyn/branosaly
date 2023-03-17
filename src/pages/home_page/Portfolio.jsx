import React from "react";
import my_webpage from "./imgs/portfolio_my_webpage.jpg";
import expense_tracker_app from "./imgs/portfolio_expense_tracker_app.jpg";
import coming_soon from "./imgs/portfolio_coming_soon.jpg";
import yelpplace from "./imgs/portfolio_yelpplace.jpg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="portfolio" name="portfolio" id="portfolio">
      <div className="">
        <hr />
        <div className="homepage-title">
          <h1>
            <strong>Just A Few Of My Works</strong>
          </h1>
        </div>
      </div>
      <div className="portfolio-grid">
        <div>
          <img src={my_webpage} alt="" />
          <p>
            <strong>My personal website you are on</strong>
            <br />
            <br />
            <strong>Used technologies:</strong> ReactJS, Javascript, CSS(SCSS), HTML, Vite, Framer motion and few react modules.
          </p>
        </div>
        <div>
          <Link to="/expense_tracker">
            <img src={expense_tracker_app} alt="" />
            <p>
              <strong>Expense tracker app</strong>
              <br />
              <br />
              <strong>Used technologies:</strong> ReactJS, Javascript, CSS(SCSS), HTML, Vite.
            </p>
          </Link>
        </div>

        <div>
          <img src={coming_soon} alt="" />
          <p>
            <strong>Social media app &rarr; In progress</strong>
            <br />
            <br />
            <strong>Used technologies:</strong> ReactJS, Javascript, CSS(SCSS), HTML, Vite, API...
          </p>
        </div>

        <div>
          <a href="https://intense-wave-32902.herokuapp.com/">
            <img src={yelpplace} alt="" />
            <p>
              <strong>YelpPlace</strong>
              <br />
              <br />
              <strong>Used technologies:</strong> Javascript, CSS, HTML, NodeJSs, EJS, RESTful API, ExpressJS, MongoDB, Helmet, Bootstrap, Cloudinary and many other tools.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
