import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Navigation from "../layouts/Navigation";

import PostImageUrl from "../assets/img/post-bg.jpg";

const Post = () => {
    const title = "Man must explore, and this is exploration at its greatest";
    const subtitle = "Problems look mighty small from 150 miles up";
    const author = "Start Bootstrap";
    const date = "August 24, 2022";
    return (
        <>
            <Navigation />
            <Header
                imageUrl={PostImageUrl}
                typePage="post"
                title={title}
                description={subtitle}
                author={author}
                date={date} />
            <Footer />

        </>
    );
}

export default Post;