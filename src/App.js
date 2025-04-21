import React, { useState } from "react";
import { products } from "./data/products";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAdd = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleRemove = (product) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <>
      <Navbar cartCount={cartCount} toggleCart={() => setCartOpen(!cartOpen)} />
      <ProductList products={products} onAdd={handleAdd} />
      <CartSidebar
        isOpen={cartOpen}
        cartItems={cartItems}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
    </>
  );
};

export default App;
