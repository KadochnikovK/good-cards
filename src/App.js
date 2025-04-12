import React, { useState, useEffect } from 'react';

import List from './components/List/ListComponent';
import Header from './components/Header/HeaderComponent';
import Footer from './components/Footer/FooterComponent';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
        const data = await fetch("https://dummyjson.com/products").then(data => data.json())
        setProducts(data.products);
        setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleItemDoubleClick = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('.footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return <div className="loading"><span class="loader"></span></div>;
  }

  return (
    <div className="app">
      <Header scrollToFooter={scrollToFooter} />
      <main className="main-content">
        <List products={products} onItemDoubleClick={handleItemDoubleClick} />
      </main>
      <Footer />
    </div>
  );
};

export default App;