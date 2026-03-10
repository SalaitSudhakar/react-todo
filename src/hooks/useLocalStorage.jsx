import React, { useCallback } from "react";

const useLocalStorage = (key) => {
  const getData = useCallback(() => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Invalid JSON in localStorage", error);
      return null;
    }
  }, [key]);

  const storeData = useCallback(
    (data) => {
      localStorage.setItem(key, JSON.stringify(data));
    },
    [key],
  );

  const removeKey = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);
  return { getData, storeData, removeKey };
};

export default useLocalStorage;
