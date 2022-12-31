import React from "react";
import type { RootState } from "./state/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./state/slice/counter";

const App: React.FC = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Hello This is for prove redux toolkit</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  );
};

export default App;
