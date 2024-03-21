
function moveZeros(arr) {
  const allZeros = arr.filter(item => item === 0);
  const restOfItems = arr.filter(item => item !== 0);
  return [...restOfItems, ...allZeros];
}