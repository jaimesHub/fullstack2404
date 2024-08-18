import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/counter.action';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(5));
    }

    const handleDecrement = () => {
        dispatch(decrement(5));
    }

    return (
        <>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <h1>Count: {count}</h1>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </>
    );
}

export default Counter;