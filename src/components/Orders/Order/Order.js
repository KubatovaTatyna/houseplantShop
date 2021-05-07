import Checkout from "../../Checkout/Checkout";
import classes from "./Order.module.css";

const Order = ({ name, phone, address, pots, price }) => {
  // const outputPots = Object.keys()
  //   .map(pot => <em>{pot} - {pots[pot]}</em>);
  //   console.log(outputPots)
  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;