import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/counter.action';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
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