import React from "react";
import styles from "../styles/CartModal.module.css";
import { useValue } from "../ItemContext";

function CartModal() {
  const { cart, clear, total,toggle } = useValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={()=>toggle()}>
        Close
      </div>
      <div className={styles.clearButton} onClick={() => clear()}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map((item, id) => {
          return (
            <div className={styles.cartCard} key={id}>
              <h1>{item.name}</h1>
              <h2>x{item.qty}</h2>
              <h3>x{item.qty * item.price}</h3>
            </div>
          );
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>${total}</div>
      </div>
    </div>
  );
}

export default CartModal;
