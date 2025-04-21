import React from "react";

const ProductList = ({ products, onAdd }) => (
  <div className="container my-3">
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img style={{ "margin-top": "20px",  width: '30%', height: '30%', "align-self": "anchor-center"}} src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body text-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">${product.price}</p>
              <button className="btn btn-primary" onClick={() => onAdd(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
