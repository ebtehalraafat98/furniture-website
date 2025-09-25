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

export default AddToCartButton;