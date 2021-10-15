import React, { useContext } from "react";
import { ContextApi } from "../../App";
import SingleOrder from "../SingleOrder/SingleOrder";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const { cart, calculateTotal } = useContext(ContextApi);

  const grandTotalPrice = calculateTotal();
  // console.log(cart);
  return (
    <div className="d-flex py-5">
      <div className="order-review-container w-75">
        {cart.map((item) => (
          <SingleOrder
            quantity={item.quantity}
            key={item.id}
            item={item}
          ></SingleOrder>
        ))}
      </div>

      <div className="ms-2 mt-5">
        <h3>Total Price: ${grandTotalPrice}</h3>
        <Link to="/shipping">
          <Button>Process to shipping</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
