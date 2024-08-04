import Component6 from "./Component6";
import Component7 from "./Component7";

const Component4 = (props) => {
    return (
        <>
            <h1>Component4</h1>
            <Component6 data={props.data} />
            <Component7 />
        </>
    );
}

export default Component4;