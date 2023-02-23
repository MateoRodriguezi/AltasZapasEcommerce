import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../Context/CartContext";

const Cartwidget = () => {
  const { cartTotal } = useCartContext()

  return (
    <>
      <button className="p-2 border-solid border rounded-md shadow-md hover:shadow-lg text-sm hover:border-black rounded flex justify-center items-center gap-1 ">
      {cartTotal() !== 0 && cartTotal()} <FaShoppingCart />
      </button>
    </>
  );
};
export default Cartwidget;