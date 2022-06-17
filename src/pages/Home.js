import React from "react";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <section>
        <h3 className="container mt-4 d-block">Products</h3>
        <Product />
      </section>
    </div>
  );
};

export default Home;
