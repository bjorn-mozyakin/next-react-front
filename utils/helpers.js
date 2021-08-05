export const devideArrays = (threads, size = 30) => {
  const arr = [];
  while (threads.length > 0) arr.push(threads.splice(0, size));
  return arr;
};

export const defineDeviceType = (UA) => {
  return Boolean(
    UA.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
};
