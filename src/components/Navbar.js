import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { getTotal } from "../store/cartSlice";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [items, dispatch]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand text-dark" to="/">
            ShopWhere
          </Link>
          <button
            className="navbar-toggler bg-black text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link to="/cart" className="text-black">
                <span className="cart">
                  <AiOutlineShoppingCart className="cartLogo" />
                  <span className="cartText">{items.cartTotalQuantity}</span>
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
