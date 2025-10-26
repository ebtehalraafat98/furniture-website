import FurnitureCard from './FurnitureCard';
import './Cards.css';
import { API_URL } from '../../config';
import { useEffect, useState } from 'react';


function Cards() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section id="cards" className="container py-5 ">
      <h2 className="text-center mb-4">OUR FURNITURE</h2>
      <p className="text-center text-muted mb-5">
        which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn’t an.
      </p>
      <div className="row">
        {products.map((p) => (
          <FurnitureCard
            key={p.id}
            id={p.id}
            title={p.title}
            desc={p.desc}
            image={p.image}
            price={p.price}

          />
        ))}
      </div>
    </section>
  );
}

export default Cards;