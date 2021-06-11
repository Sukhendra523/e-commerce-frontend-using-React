import React, { useState, useEffect } from "react";
import Base from "./Base";
import { loadCart } from "./helper/cartHelper";
import Card from "./Card";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState([false]);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);
  const loadAllProducts = () => {
    return (
      <div>
        <h1>This section is to load all products</h1>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              addtoCart={false}
              removeFromCart={true}
              setReload={setReload}
              reload={reload}
            />
          );
        })}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div>
        <h1>This section is to Checkout</h1>
      </div>
    );
  };
  return (
    <Base title="Cart Page" description="Checkout Here">
      <div className="row text-center">
        <div className="col-6">
          {products.length > 0 ? (
            loadAllProducts()
          ) : (
            <h3>NO products in cart</h3>
          )}
        </div>
        <div className="col-6">
          <StripeCheckout
            products={products}
            setReload={setReload}
            reload={reload}
          />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
