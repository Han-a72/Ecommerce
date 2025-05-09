import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delItem } from "../redux/actions/Index";
import { NavLink } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "./Home.css";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };

  const cartItems = (cartItem) => {
    return (
      <div className="cart-item-box" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn btn-light remove-btn"
            aria-label="Remove"
          >
            <FaTrash size={18} color="#dc3545" />
          </button>
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="empty-cart">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container text-center">
        <div className="row">
          <NavLink
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-50 mx-auto"
          >
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
