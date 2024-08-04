import { useContext } from "react";
import DataContext from "./context/DataContext";

const Component6 = (props) => {
    const dataContext = useContext(DataContext);
    console.log("data context from Component 1 used in Component 6: ", dataContext);

    console.log("data used from Component 1 using props: ", props.data);

    return (
        <div>Component6</div>
    );
}

export default Component6;