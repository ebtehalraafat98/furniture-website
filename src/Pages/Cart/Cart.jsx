<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';
import styles from './Cart.module.css';
import { clearCart } from '../../redux/slices/cartSlice';


function Cart() {
    const items = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className={styles.cart}>
            <h2>Your Cart ({totalQuantity} items)</h2>

            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                items.map(item => (
                    <div key={item.id} className={styles.item}>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h5>{item.title}</h5>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}

            <h3 className={styles.total}>Total: ${totalPrice.toFixed(2)}</h3>
            <button className={styles.clearBtn} onClick={() => dispatch(clearCart())}>
                Clear Cart
            </button>
        </div>
    );
}

=======
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/slices/cartSlice';
import styles from './Cart.module.css';
import { clearCart } from '../../redux/slices/cartSlice';


function Cart() {
    const items = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const totalPrice = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className={styles.cart}>
            <h2>Your Cart ({totalQuantity} items)</h2>

            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                items.map(item => (
                    <div key={item.id} className={styles.item}>
                        <img src={item.image} alt={item.title} />
                        <div>
                            <h5>{item.title}</h5>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            )}

            <h3 className={styles.total}>Total: ${totalPrice.toFixed(2)}</h3>
            <button className={styles.clearBtn} onClick={() => dispatch(clearCart())}>
                Clear Cart
            </button>
        </div>
    );
}

>>>>>>> 03ef7f6b9498c4d0970794466ee4e0fa271ce33f
export default Cart;