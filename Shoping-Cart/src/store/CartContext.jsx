import { createContext, useReducer, useState } from 'react';
import cartReducer from './cart-reducer';

export const CartContext = createContext();

const initialCartState = {
  items: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const [showCart, setShowCart] = useState(false);

  const addItem = item => dispatch({ type: 'ADD', item });
  const removeItem = id => dispatch({ type: 'REMOVE', id });
  const toggleCart = () => setShowCart(prev => !prev);

  return (
    <CartContext.Provider value={{
      items: state.items,
      addItem,
      removeItem,
      showCart,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
