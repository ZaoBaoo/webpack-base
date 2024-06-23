import styles from "./App.module.scss";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const countIncrement = () => {
    setCount((stata) => stata + 1);
  };

  const countDecrement = () => {
    setCount((stata) => stata - 1);
  };

  return (
    <>
      <Link to="/about">about</Link>
      <br />
      <Link to="/shop">shop</Link>

      <p>Hello World!</p>
      <p>Count: {count}</p>

      <button className={styles.button} onClick={countIncrement}>
        +`
      </button>
      <button className={styles.button} onClick={countDecrement}>
        -
      </button>

      <Outlet />
    </>
  );
};
