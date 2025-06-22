import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [amountValue, setAmountValue] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const changeBy = () => {
    dispatch(changeByAmount(Number(amountValue) || 0));
    setAmountValue("");
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <div className="card bg-base-100 shadow-xl w-full max-w-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl">Counter</h2>
          <span className="text-4xl font-bold py-4">{count}</span>

          <div className="flex gap-3">
            <button
              className="btn btn-outline btn-error"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>

            <button
              className="btn btn-outline btn-success"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
          </div>

          <div className="form-control w-full mt-4">
            <label className="label mb-2">
              <span className="label-text font-medium mb-2 text-lg">
                Change by amount
              </span>
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              className="input input-bordered w-full mb-2"
              value={amountValue}
              onChange={(e) => setAmountValue(e.target.value)}
            />
            <button className="btn" onClick={changeBy}>
              Change
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Counter;
