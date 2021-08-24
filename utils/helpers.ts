// полная проверка на объект (исключает null/array/function и че там еще может быть)
export const isObject = (value) => {
  return value && typeof value === "object" && value.constructor === Object;
};

export const devideArrays = ({ initialArr, size = null, parts = null }) => {
  const clonedArr = initialArr.slice(); // важно скопировать, иначе очиститсяисходный массив
  const newArr = [];
  if (parts) {
    size = Math.ceil(clonedArr.length / parts);
  }
  if (size) {
    while (clonedArr.length > 0) newArr.push(clonedArr.splice(0, size));
  } else {
    newArr.push(clonedArr);
  }
  return newArr;
};

export const defineDeviceType = (UA: string, cookies: any) => {
  switch (cookies?.show_desktop) {
    case "1":
      return false;
    case "0":
      return true;
    default:
      return Boolean(
        UA.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      );
  }
};

export const renameDataAttributes = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [`data-${key}`, value])
  );
};

export const defineAvatarClass = (id: number): string => {
  if (id > 0) {
    return "user__pic_crimson-100";
  }
  return "";
};
