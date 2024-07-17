import Content from "../components/Content";

const Header = (props) => {
    return (
        <>
            <header className="masthead" style={{ backgroundImage: `url(${props.imageUrl})` }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <Content
                                typePage={props.typePage}
                                title={props.title}
                                description={props.description}
                                author={props.author}
                                date={props.date}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;