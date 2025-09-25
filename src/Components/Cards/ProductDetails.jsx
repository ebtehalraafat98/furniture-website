import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import styles from "./ProductDetails.module.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`); 
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.details}>
      <div className={styles.card}>
        <h2 className={styles.title}>{product.title}</h2>

        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />

        <p className={styles.desc}>{product.desc}</p>

        <h4 className={styles.price}>${product.price.toFixed(2)}</h4>

        <p className={styles.meta}>
          Category: <span>{product.category}</span>
        </p>
        <p className={styles.meta}>
          In stock: <span>{product.stock}</span>
        </p>

        <div className={styles.actions}>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;