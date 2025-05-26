const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center border-b py-4 gap-4">
      {/* Item image */}
      <img
        src={item.image || `https://via.placeholder.com/60?text=${item.name.charAt(0)}`}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />

      {/* Item details */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description || 'Delicious food item'}</p>
        <div className="text-sm mt-1">
          <span className="font-semibold text-blue-600">${item.price.toFixed(2)}</span> × {item.amount}
        </div>
      </div>

      {/* Remove button */}
      <button
        onClick={onRemove}
        className="text-red-600 text-2xl font-bold hover:text-red-800"
        title="Remove item"
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
