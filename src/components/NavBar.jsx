import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ items }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Logo_Milk_%26_Honey_Distillery.jpg"
            width="50"
            alt=""
          />{" "}
          <i className="fas fa-store"></i>
        </Link>

        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarsExample03"
        >
          <div></div>
          <div className="navbar-nav ">
            <div className="nav-item">
              <NavLink to="/home" className="nav-link ">
                Home
              </NavLink>
            </div>

            <div className="nav-item">
              <NavLink
                to="/ProductsPage?category=clothing"
                className="nav-link "
              >
                Clothing
              </NavLink>
            </div>

            <div className="nav-item">
              <NavLink
                to="/ProductsPage?category=jewelery"
                className="nav-link "
              >
                Jewelery
              </NavLink>
            </div>

            <div className="nav-item">
              <NavLink
                to="/ProductsPage?category=electronics"
                className="nav-link "
              >
                Electronics
              </NavLink>
            </div>

            <div className="nav-item">
              <NavLink
                to="/ProductsPage?category=contactus"
                className="nav-link "
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          <div className="navbar-nav ml-5 ">
            <div className="nav-item">
              <NavLink
                to="/ProductsPage?category=wishlist"
                className="nav-link "
              >
                WishList ({items})
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink
                to="/ProductsPage?category=shoppingcart"
                className="nav-link "
              >
                Shopping Cart ({items})
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
