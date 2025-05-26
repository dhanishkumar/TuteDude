import { useContext } from 'react';
import { CartContext } from '../store/CartContext';

const Header = () => {
  const { toggleCart, items } = useContext(CartContext);

  const totalItems = items.reduce((acc, item) => acc + item.amount, 0);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ReactMeals</h1>
      <button onClick={toggleCart} className="bg-white text-blue-600 px-4 py-2 rounded">
        Cart ({totalItems})
      </button>
    </header>
  );
};

export default Header;
