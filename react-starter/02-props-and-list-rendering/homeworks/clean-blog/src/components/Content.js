import { Link } from "react-router-dom";

const Content = (props) => {
    const renderTypePage = () => {
        switch (props.typePage) {
            case "page":
                return (
                    <div className="page-heading">
                        <h1>{props.title}</h1>
                        <span className="subheading">{props.description}</span>
                    </div>
                );

            case "post":
                return (
                    <div className="post-heading">
                        <h1>{props.title}</h1>
                        <h2 className="subheading">{props.description}</h2>
                        <span className="meta">
                            Posted by <Link to="/">{props.author}</Link> on {props.date}
                        </span>
                    </div>
                );

            default:
                return (
                    <h1 className="text-center" style={{ color: "white" }}>
                        {props.title}
                    </h1>
                );
        }
    }
    return (
        <>
            {renderTypePage()}
        </>
    )
}

export default Content;