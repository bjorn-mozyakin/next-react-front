import React from "react";

export const devideArrays = (threads, size = 30) => {
  const arr = [];
  while (threads.length > 0) arr.push(threads.splice(0, size));
  return arr;
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
