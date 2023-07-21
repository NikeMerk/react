import { useCallback, useState } from "react";

function useCount(initialValue) {
  let [count, setCount] = useState(initialValue);
  let [countTwo, setCountTwo] = useState(initialValue);

  let increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  });
  let decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  return { count, increment, decrement };
}

export default useCount;
