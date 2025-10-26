<<<<<<< HEAD
import styles from './Cards.module.css';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

function FurnitureCard({ id, title, desc, image, price, category, stock }) {
  const product = { id, title, desc, image, price, category, stock };

  return (
    <div className="col-md-4 mb-4 d-flex">
      <div
        className={`
          ${styles.card} 
          d-flex flex-column justify-content-between 
          shadow-sm w-100 text-center p-3
        `}
      >
        <img
          src={image}
          alt={title}
          className={`card-img-top mx-auto ${styles.customCardImg}`}
        />

        <div className={`card-body ${styles.cardBody}`}>
          <h5 className="card-title fw-bold">{title}</h5>

          <p className="text-secondary small mb-1">
            Category:{" "}
            <Link to={`/category/${category}`} className="text-decoration-none text-info fw-semibold">
              {category}
            </Link>
          </p>

          <p className="text-secondary small">In stock: {stock}</p>

          <div className="d-flex justify-content-center gap-2 mt-3">
            <Link to={`/product/${id}`} className="btn btn-warning text-white">
              Learn more
            </Link>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

=======
import styles from './Cards.module.css';
import { Link } from 'react-router-dom';
import { API_URL } from '../../config';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

function FurnitureCard({ id, title, desc, image, price, category, stock }) {
  const product = { id, title, desc, image, price, category, stock };

  return (
    <div className="col-md-4 mb-4 d-flex">
      <div
        className={`
          ${styles.card} 
          d-flex flex-column justify-content-between 
          shadow-sm w-100 text-center p-3
        `}
      >
        <img
          src={image}
          alt={title}
          className={`card-img-top mx-auto ${styles.customCardImg}`}
        />

        <div className={`card-body ${styles.cardBody}`}>
          <h5 className="card-title fw-bold">{title}</h5>

          <p className="text-secondary small mb-1">
            Category:{" "}
            <Link to={`/category/${category}`} className="text-decoration-none text-info fw-semibold">
              {category}
            </Link>
          </p>

          <p className="text-secondary small">In stock: {stock}</p>

          <div className="d-flex justify-content-center gap-2 mt-3">
            <Link to={`/product/${id}`} className="btn btn-warning text-white">
              Learn more
            </Link>
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

>>>>>>> 03ef7f6b9498c4d0970794466ee4e0fa271ce33f
export default FurnitureCard;