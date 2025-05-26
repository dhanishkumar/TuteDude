import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import { CartProvider } from './store/CartContext';

function App() {
  return (
    <CartProvider>
      <Header />
      <Meals />
      <Cart />
    </CartProvider>
  );
}

export default App;
