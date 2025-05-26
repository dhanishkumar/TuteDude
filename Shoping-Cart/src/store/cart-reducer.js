const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingIndex = state.items.findIndex(i => i.id === action.item.id);
    let updatedItems;

    if (existingIndex !== -1) {
      const updatedItem = {
        ...state.items[existingIndex],
        amount: state.items[existingIndex].amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }

    return { items: updatedItems };
  }

  if (action.type === 'REMOVE') {
    const updatedItems = state.items.filter(item => item.id !== action.id);
    return { items: updatedItems };
  }

  return state;
};

export default cartReducer;
