<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import styles from './AddToCartButton.module.css';

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      className={  `${styles.button} btn btn-info text-white`}
      onClick={() => dispatch(addToCart(product))}
    >
      + Add to Cart
    </button>
  );
}

=======
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import styles from './AddToCartButton.module.css';

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      className={  `${styles.button} btn btn-info text-white`}
      onClick={() => dispatch(addToCart(product))}
    >
      + Add to Cart
    </button>
  );
}

>>>>>>> 03ef7f6b9498c4d0970794466ee4e0fa271ce33f
export default AddToCartButton;