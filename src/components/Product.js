import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const [products, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        "https://api4286.s3.ap-south-1.amazonaws.com/products.json"
      );
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {products.map((product) => (
        <div
          className="card d-inline-block m-4 "
          key={product.id}
          style={{ width: "18rem" }}
        >
          <img
            src={product.filename}
            className="productImg rounded-top"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <div className="productPriceRat">
              <h5>₹{product.price}</h5>
              <p className="productRating">
                <span className="ratingTxt">{product.rating}</span>
                <AiFillStar />
              </p>
            </div>
            <button
              onClick={() => handleAdd(product)}
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
