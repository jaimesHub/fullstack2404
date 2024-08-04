import DataContext from "./context/DataContext";
import Component2 from "./Component2";
import Component3 from "./Component3";
import { useState } from "react";

const Component1 = () => {
    const [darkMode, setDarkMode] = useState(false);
    const data = [1, 2, 3, 4, 5];

    const valueContext = {
        data: ['One', 'Two', 'Three', 'Four', 'Five'],
        darkMode: darkMode,
        setDarkMode: setDarkMode,
    }

    return (
        <>
            <div style={{
                background: darkMode ? 'black' : 'white',
                color: darkMode ? 'white' : 'black'
            }}>
                <DataContext.Provider value={valueContext}>
                    <h1>Component 1</h1>
                    <Component2 data={data} />
                    <Component3 />
                </DataContext.Provider>
            </div>

        </>
    );
}

export default Component1;