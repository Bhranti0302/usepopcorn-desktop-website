import React from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count change to: ${count}`);
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}

export default Counter;
