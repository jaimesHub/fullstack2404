import { useContext } from "react";
import DataContext from "./context/DataContext";

const Component7 = () => {
    const { setDarkMode, darkMode } = useContext(DataContext);
    console.log(darkMode)
    // console.log("Value of data context in the Component 7: ", dataContext);
    return (
        <div>
            <h1>Component7</h1>
            <button
                onClick={() => setDarkMode(!darkMode)}
            >Set Darkmode</button>
        </div>
    );
}

export default Component7;