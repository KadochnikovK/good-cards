import Item from "../Item/ItemComponent";

export default function List({ products, onItemDoubleClick }) {
    return (
      <div className="products-grid">
        {products.map(product => (
          <Item 
            key={product.id} 
            product={product} 
            onDoubleClick={() => onItemDoubleClick(product.id)}
          />
        ))}
      </div>
    );
  };