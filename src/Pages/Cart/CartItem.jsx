// src/Pages/Cart/CartItem.jsx
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';
import styles from './Cart.module.css';

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className={styles.item}>
            <img src={item.image} alt={item.title} />
            <div>
                <h5>{item.title}</h5>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <button className={`${styles.fullWidthBtn}`}
                    onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                </button>
            </div>
        </div>
    );
}

export default CartItem;