export function shuffleArray(array) {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomElements(array, count) {
  return shuffleArray(array).slice(0, count);
}
