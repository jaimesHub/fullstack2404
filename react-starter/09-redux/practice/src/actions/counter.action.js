const increment = (number) => ({ type: "INCREMENT", payload: number });

const decrement = (number) => {
    return { type: "DECREMENT", payload: number };
};

export {
    increment,
    decrement
};