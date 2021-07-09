import { useEffect, useState } from 'react';

function useDebounce<T>(value: T, delay: number = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(debounce);
    };
  }, [value, delay]);
  return debouncedValue;
}
export default useDebounce;
