import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, decreseCartQua, getTotal, remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [products, dispatch]);

  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreseCartQua(product));
  };

  const handleIncreaseCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div>
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2">
                <div className="card-body p-0">
                  <div className="row g-0 d-flex justify-content-center">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            Shopping Cart
                          </h1>
                          <h6 className="d-flex mb-0 text-muted">
                            Total Price : ₹{" "}
                            {products.cartTotalAmount.toFixed(2)}
                          </h6>
                        </div>
                        {products.cartItems.length === 0 ? (
                          <div>
                            <p>Your Cart is currently empty</p>
                          </div>
                        ) : (
                          <>
                            {products.cartItems?.map((product) => (
                              <>
                                <hr className="my-4" />

                                <div
                                  key={product.id}
                                  className="row mb-4 d-flex justify-content-between align-items-center"
                                >
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={product.filename}
                                      className="img-fluid rounded-3"
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    <h6 className="text-muted text-capitalize">
                                      {product.type}
                                    </h6>
                                    <h6 className="text-black mb-0">
                                      {product.title}
                                    </h6>
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex quntityChange">
                                    <span
                                      className="decreaseQua"
                                      onClick={() =>
                                        handleDecreaseCart(product)
                                      }
                                      style={{ fontSize: 24 }}
                                    >
                                      -
                                    </span>
                                    <span style={{ fontSize: 22 }}>
                                      {product.cartQuantity}
                                    </span>
                                    <span
                                      className="increaseQua"
                                      onClick={() =>
                                        handleIncreaseCart(product)
                                      }
                                      style={{ fontSize: 24 }}
                                    >
                                      +
                                    </span>
                                  </div>
                                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h6 className="mb-0">
                                      ₹ {product.price * product.cartQuantity}
                                    </h6>
                                  </div>
                                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <button
                                      className="btn btn-danger"
                                      onClick={() => handleRemove(product)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>

                                <hr className="my-4" />
                              </>
                            ))}

                            <div class="col-lg-16 bg-grey">
                              <div class="p-5">
                                <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                <hr class="my-4" />

                                <div class="d-flex justify-content-between mb-4">
                                  <h5 class="text-uppercase">
                                    items {products.cartItems.length}
                                  </h5>
                                </div>

                                <h5 class="text-uppercase mb-3">
                                  Shipping Address
                                </h5>

                                <div class="mb-4 pb-2">
                                  <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Enter Your Address"
                                  ></textarea>
                                </div>

                                <h5 class="text-uppercase mb-3">Pincode</h5>

                                <div class="mb-5">
                                  <div class="form-outline">
                                    <input
                                      type="text"
                                      id="form3Examplea2"
                                      class="form-control form-control-lg"
                                    />
                                    <label
                                      class="form-label"
                                      for="form3Examplea2"
                                    >
                                      Enter your code
                                    </label>
                                  </div>
                                </div>

                                <hr class="my-4" />

                                <div class="d-flex justify-content-between mb-5">
                                  <h5 class="text-uppercase">Total price</h5>
                                  <h5>
                                    ₹ {products.cartTotalAmount.toFixed(2)}
                                  </h5>
                                </div>

                                <button
                                  type="button"
                                  class="btn btn-dark btn-block btn-lg"
                                  data-mdb-ripple-color="dark"
                                >
                                  Buy Now
                                </button>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to="/" className="text-body">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                              </svg>
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
