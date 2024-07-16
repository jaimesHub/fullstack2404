const Product = (props) => {
    const renderPrice = () => {
        switch (props.type) {
            case 1:
                return `$${props.price1} - $${props.price2}`;
            case 2:
                return (
                    <>
                        <span class="text-muted text-decoration-line-through">${props.price1}</span>
                        ${props.price2}
                    </>
                )
            default:
                return `$${props.price1}`;
        }
    }
    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* Sale badge*/}
                {props?.isSale ? <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div> : null}
                {/* Product image*/}
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                {/* Product details*/}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* Product name*/}
                        <h5 className="fw-bolder">{props.name}</h5>
                        {/* Product reviews*/}
                        {props.isReview ? <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                            <div className="bi-star-fill" />
                        </div> : null}
                        {/* Product price*/}
                        {renderPrice()}
                    </div>
                </div>
                {/* Product actions*/}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                </div>
            </div>
        </div>
    );
}

export default Product;