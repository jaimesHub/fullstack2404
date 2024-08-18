const increment = () => ({ type: "INCREMENT" });

const decrement = () => {
    return { type: "DECREMENT" };
};

export {
    increment,
    decrement
};