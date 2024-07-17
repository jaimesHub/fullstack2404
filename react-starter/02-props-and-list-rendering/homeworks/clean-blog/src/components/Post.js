import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Navigation from "../layouts/Navigation";

const Post = () => {
    return (
        <>
            <Navigation />
            <Header title="Post" isContainPost={true} />

            <Footer />

        </>
    );
}

export default Post;