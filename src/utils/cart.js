export function calculateTotal(items) {
  if (!items || items.length === 0) return 0;
  
  const subtotal = items.reduce((sum, item) => {
    return sum + (item.price * (item.quantity || 1));
  }, 0);

  return Number(subtotal.toFixed(2));
}