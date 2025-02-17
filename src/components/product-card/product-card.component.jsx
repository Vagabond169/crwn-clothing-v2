/** @format */
// import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import { CartContext } from "../../contexts/cart.context";
import "./product-card.styles.scss";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  const cartItems = useSelector(selectCartItems);
  // const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
