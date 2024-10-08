import PropTypes from 'prop-types';

const Product = ({ name, isSale, isReview, type, firstPrice, secondPrice }) => {
    const renderingPrice = (type) => {
        switch (type) {
            case 1:
                return (
                    <>
                        <span className="text-muted text-decoration-line-through">${firstPrice}</span>
                        ${secondPrice}
                    </>
                );
            case 2:
                return (
                    <>
                        ${firstPrice} - ${secondPrice}
                    </>
                );
            default:
                return (
                    <>
                        ${firstPrice}
                    </>
                );
        }
    }

    return (
        <>
            <div className="col mb-5">
                <div className="card h-100">
                    {/* Sale badge*/}
                    {isSale ? <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div> : null}
                    {/* Product image*/}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                    {/* Product details*/}
                    <div className="card-body p-4">
                        <div className="text-center">
                            {/* Product name*/}
                            <h5 className="fw-bolder">{name}</h5>
                            {/* Product reviews*/}
                            {
                                isReview ? <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill" />
                                    <div className="bi-star-fill" />
                                    <div className="bi-star-fill" />
                                    <div className="bi-star-fill" />
                                    <div className="bi-star-fill" />
                                </div> : null
                            }
                            {/* Product price*/}
                            {renderingPrice(type)}
                        </div>
                    </div>
                    {/* Product actions*/}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center"><a href="#">Add to cart</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    isSale: PropTypes.bool,
    isReview: PropTypes.bool,
    type: PropTypes.number.isRequired,
    firstPrice: PropTypes.number.isRequired,
    secondPrice: PropTypes.number
}

Product.defaultProps = {
    isSale: false,
    isReview: false,
    secondPrice: 0
}

export default Product;