import Stars from "../Stars/StarsComponent";

export default function Item({ product, onDoubleClick }) {
    return (
      <div className="product-card" onDoubleClick={onDoubleClick}>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="product-image"
        />
        <h3 className="product-title">Name: {product.title}</h3>
        <p className="product-price">Price: {product.price}$</p>
        <div className="product-rating">
          <Stars rating={product.rating} />
         
        </div>
      </div>
    );
  };
  