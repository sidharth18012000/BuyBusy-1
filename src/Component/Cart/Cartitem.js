import React from "react";
import { useProductContext } from "../../productContext";
import "bootstrap/dist/css/bootstrap.css";

// new css styles
import styles from "../../styles/cart.module.css";
// css styles from old other file
import oldStyles from "../../styles/home.module.css";

// Add these imports at the top of your file
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add the icons to the library
library.add(faMinusCircle, faPlusCircle);
// Render single cart item
export default function CartItem(props) {
  const { name, image, price, category, quantity } = props.product;

  //Required functions from custom hook(product)
  const { removeFromCart, increaseQuant, decreaseQuant } = useProductContext();

  return (
    <>
      <div className={oldStyles.cardContainer}>
        {/* Image container */}
        <div className={styles.imageContainer}>
          {/* product Image */}
          <img src={image} alt={category} />
        </div>
        {/* Div for descriptino of product */}
        <div className={styles.itemInfo}>
          <div className={styles.namePrice}>{name}</div>

          <div className={styles.priceQuant}>
            {/* price of the product */}
            <div className={styles.price}>₹{price}</div>

            {/* Quantity of the product */}
            <div className={styles.quantity}>
              {/* to decrease product quantity */}
              <span className={styles.minus}>
                <FontAwesomeIcon
                  icon="minus-circle"
                  onClick={() => decreaseQuant(props.product)}
                />
              </span>
              {/* quantity and &nbsp; to create spacing*/}
              &nbsp; {quantity} &nbsp;
              {/* increase product quantity */}
              <span className={styles.plus}>
                <FontAwesomeIcon
                  icon="plus-circle"
                  onClick={() => increaseQuant(props.product)}
                />
              </span>
            </div>
          </div>

          {/* remove from cart button */}
          <div className={styles.btnContainer}>
            <button
              className={styles.removeBtn}
              onClick={() => removeFromCart(props.product)}
            >
              Remove From cart
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
