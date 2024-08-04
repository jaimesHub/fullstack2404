import Component4 from "./Component4";
import Component5 from "./Component5";

const Component2 = (props) => {
    return (
        <>
            <h1>Component 2</h1>
            <Component4 data={props.data} />
            <Component5 />
        </>
    );
}

export default Component2;