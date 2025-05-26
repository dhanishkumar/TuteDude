import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { CartContext } from '../store/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { showCart, toggleCart, items, removeItem } = useContext(CartContext);

  if (!showCart) return null;

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.amount, 0).toFixed(2);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {items.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          items.map(item => (
            <CartItem key={item.id} item={item} onRemove={() => removeItem(item.id)} />
          ))
        )}
        <div className="flex justify-between mt-4">
          <span className="font-bold">Total:</span>
          <span>${totalAmount}</span>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={toggleCart} className="bg-red-500 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Cart;
