import React, { useState, useEffect } from "react";

const getStorageValue = <T>(key: string, defaultValue: T) => {
  try {
    const saved = localStorage.getItem(key);

    return saved ? JSON.parse(saved) : defaultValue;
  } catch (err) {
    return defaultValue;
  }
};

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>];

export const useLocalStorage = <T>(
  key: string,
  defaultValue: T
): ReturnType<T> => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  }, [value, key]);

  return [value, setValue];
};
