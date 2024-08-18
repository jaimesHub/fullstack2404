import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../slices/counter.slice";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(5));
    }

    const handleDecrementByAmount = () => {
        dispatch(decrementByAmount(5));
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrementByAmount}>Increment by amount</button>
            <button onClick={handleDecrementByAmount}>Decrement by amount</button>
        </div>
    )

}

export default Counter;