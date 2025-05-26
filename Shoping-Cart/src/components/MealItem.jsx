import { useContext, useRef } from 'react';
import { CartContext } from '../store/CartContext';

const MealItem = ({ meal }) => {
  const { addItem } = useContext(CartContext);
  const amountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const amount = +amountRef.current.value;

    if (amount < 1) return;

    addItem({ ...meal, amount });
  };

  return (
    <div className="border p-4 mb-4 rounded shadow flex justify-between">
      <div>
        <h3 className="text-xl font-bold">{meal.name}</h3>
        <p className="text-sm italic">{meal.description}</p>
        <p className="font-bold text-blue-600">${meal.price.toFixed(2)}</p>
      </div>
      <form onSubmit={submitHandler} className="flex items-center gap-2">
        <input
          ref={amountRef}
          type="number"
          min="1"
          defaultValue="1"
          className="w-16 border px-2 py-1"
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded">+ Add</button>
      </form>
    </div>
  );
};

export default MealItem;
