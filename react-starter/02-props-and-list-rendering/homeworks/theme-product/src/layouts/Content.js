import Product from "../components/Product";

const Content = () => {
    const products = [
        {
            name: "Fancy Product",
            isSale: false,
            isReview: false,
            type: 2,
            firstPrice: 40.00,
            secondPrice: 80.00
        },
        {
            name: "Special Item",
            isSale: true,
            isReview: true,
            type: 1,
            firstPrice: 20.00,
            secondPrice: 18.00
        },
        {
            name: "Sale Item",
            isSale: true,
            isReview: false,
            type: 1,
            firstPrice: 50.00,
            secondPrice: 25.00
        },
        {
            name: "Popular Item",
            isSale: false,
            isReview: true,
            type: 3,
            firstPrice: 40.00,
            secondPrice: 25.00
        },
        {
            name: "Sale Product",
            isSale: true,
            isReview: false,
            type: 1,
            firstPrice: 50.00,
            secondPrice: 25.00
        },
        {
            name: "Fancy Product",
            isSale: false,
            isReview: false,
            type: 2,
            firstPrice: 120.00,
            secondPrice: 280.00
        },
        {
            name: "Special Product",
            isSale: true,
            isReview: true,
            type: 1,
            firstPrice: 20.00,
            secondPrice: 18.00
        },
        {
            name: "Popular Item",
            isSale: false,
            isReview: true,
            type: 3,
            firstPrice: 40.00,
            secondPrice: 18.00
        }
    ];

    function renderProduct(products) {
        return products.map((product, index) => {
            return (
                <Product
                    key={index}
                    name={product.name}
                    isSale={product.isSale}
                    isReview={product.isReview}
                    type={product.type}
                    firstPrice={product.firstPrice}
                    secondPrice={product.secondPrice}
                />
            );
        })
    }
    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {renderProduct(products)}
                    </div>
                </div>
            </section>

        </>
    );
}



export default Content;