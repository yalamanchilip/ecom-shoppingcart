import React from "react";

const CartSidebar = ({ isOpen, cartItems, onAdd, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div
      className={`offcanvas offcanvas-end show ${isOpen ? 'd-block' : 'd-none'}`}
      tabIndex="-1"
      style={{ visibility: isOpen ? 'visible' : 'hidden', backgroundColor: 'white' }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Your Cart</h5>
        <button type="button" className="btn-close" onClick={() => window.location.reload()}></button>
      </div>
      <div className="offcanvas-body">
        {cartItems.length === 0 && <p>Your cart is empty</p>}
        {cartItems.map((item) => (
          <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6>{item.name}</h6>
              <small>${item.price} x {item.qty}</small>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-primary me-1" onClick={() => onAdd(item)}><strong>+</strong></button> &nbsp;
              <button className="btn btn-sm btn-outline-danger" onClick={() => onRemove(item)}><strong>-</strong></button>
            </div>
          </div>
        ))}
        {cartItems.length > 0 && (
          <div className="mt-4">
            <h5>Total: ${total.toFixed(2)}</h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
