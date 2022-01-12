import SingleOrder from "../SingleOrder/SingleOrder";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./OrderReview.css";
import useStore from "../../hooks/useStore";

const OrderDetails = () => {
  const { cart, calculateTotal } = useStore();

  const grandTotalPrice = calculateTotal();
  // console.log(cart);
  return (
    <Container>
      <div className="ms-2 mt-5 order-info">
        <h3>Total Price: ${grandTotalPrice}</h3>
        <Link to="/shipping">
          <Button>Process to shipping</Button>
        </Link>
      </div>
      <div className="d-flex py-5">
        <div className="order-review-container">
          {cart.map((item) => (
            <SingleOrder
              quantity={item.quantity}
              key={item.id}
              item={item}
            ></SingleOrder>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OrderDetails;
