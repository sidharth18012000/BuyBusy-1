// react hooks
import { useEffect, useState } from "react";

// react router
import { useNavigate } from "react-router-dom";

// custom context hook for values from product and authentication
import { useProductContext } from "../productContext";
import { useAuthValue } from "../authContext";

// required component's
// single cartItem
import CartItem from "../Component/Cart/Cartitem";

// page loader
import Loader from "../Component/Loader/Loader";

// css styles
// styles from other css file
import firstStyles from "../styles/home.module.css";

// styles for cart.js
import secondStyles from "../styles/cart.module.css";

// for toast notification
import { toast } from "react-toastify";

export function Cart() {
  // to show/hide the loading spinner on the page
  const [isLoading, setLoading] = useState(true);

  // data of user from custom hook (authentication)
  const { userLoggedIn } = useAuthValue();

  // to navigate to some page
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  // purchase button handler
  function handlePurchase() {
    //If cart is empty reutrn
    if (itemInCart === 0) {
      toast.error("Nothing in your cart!");
      return;
    }
    //purchase function
    purchaseAll();
    //show notification
    toast.success("your order has been placed successfully!");

    //navigate to myorder page
    navigate("/myorder");
  }
  // data for product from custom hook (product)
  const { cart, total, clearCart, purchaseAll, itemInCart } =
    useProductContext();

  return (
    <>
      {/* condition to show/hide the loading spinner */}
      {isLoading ? (
        <Loader />
      ) : (
        //main content of the page
        <div className={secondStyles.mainContainer}>
          {/* //header within the page to show cart details
           */}
          <div className={secondStyles.header}>
            {/* //welcome message */}
            <div className={secondStyles.userInfo}>
              <h1>
                {" "}
                Hey {userLoggedIn.name}, <small> Your cart has </small>
              </h1>
            </div>

            {/* //cart details and purchase button */}
            <div className={secondStyles.cartDetail}>
              <div>
                {/* items with in the cart */}
                Item:{itemInCart}
                <br />
                {/* button to empty cart */}
                <button className={secondStyles.removeAll} onClick={clearCart}>
                  Remove All
                </button>
              </div>

              <div>
                {/* totalling area */}
                Total Amound : {total}
                <br />
                {/* button to purchase product from cart */}
                <button
                  className={secondStyles.purchaseAll}
                  onClick={handlePurchase}
                >
                  Purchase All
                </button>
              </div>
            </div>
          </div>

          {/* Rendering all the products within the user's cart */}
          <div className={firstStyles.itemContainer}>
            {/* if cart is empty */}
            {cart.length === 0 ? (
              // render this page
              <h1> Nothing in your cart !!!</h1>
            ) : (
              //else render this page
              cart.map((product, i) => <CartItem key={i} product={product} />)
            )}
          </div>
        </div>
      )}
    </>
  );
}
