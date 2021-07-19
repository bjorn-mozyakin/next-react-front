export const devideArrays = (threads, size = 30) => {
  const arr = [];
  while (threads.length > 0) arr.push(threads.splice(0, size));
  return arr;
};
