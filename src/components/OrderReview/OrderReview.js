import React, { useContext } from "react";
import { ContextApi } from "../../App";
import SingleOrder from "../SingleOrder/SingleOrder";

const OrderDetails = () => {
  const { cart, calculateTotal } = useContext(ContextApi);

  const grandTotalPrice = calculateTotal();
  // console.log(cart);
  return (
    <div className="d-flex">
      <div className="order-review-container w-75">
        {cart.map((item) => (
          <SingleOrder
            quantity={item.quantity}
            key={item.id}
            item={item}
          ></SingleOrder>
        ))}
      </div>
      <h1>Total Price: ${grandTotalPrice}</h1>
    </div>
  );
};

export default OrderDetails;
