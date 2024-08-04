import { useEffect, useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect in Count Component!");

        const timer = setInterval(() => {
            console.log("update count");
            setCount(count + 1);
        }, 1000);

        return () => {
            // This will run after the component is unmounted (not used any more)
            // clean up function -> clear function for next running
            console.log("Clean up in Count Component!");
            clearInterval(timer);
        }

        // return () => {
        //     // This will run after the component is unmounted (not used any more)
        //     console.log("Clean up in Count Component!");
        // }
    }, [count]);

    return (
        <div id="container">
            <h1>Count</h1>
            <h1 id="heading">{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment 1</button>
        </div>
    );

}

export default Count;