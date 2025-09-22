import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore white errors here
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
