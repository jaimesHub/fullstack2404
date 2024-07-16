import Product from "../components/Product";

const Content = () => {
    const products = [
        {
            name: "Fancy Product",
            type: 1,
            price1: "40.00",
            price2: "80.00",
            isSale: false,
            isReview: false
        },
        {
            name: "Special Item",
            type: 2,
            price1: "50.00",
            price2: "25.00",
            isSale: true,
            isReview: true
        },
        {
            name: "Sale Item",
            type: 3,
            price1: "50.00",
            isSale: true,
            isReview: false
        },
        {
            name: "Popular Item",
            type: 1,
            price1: "40.00",
            price2: "80.00",
            isSale: false,
            isReview: true
        },
        {
            name: "Sale Item",
            type: 1,
            price1: "120.00",
            price2: "280.00",
            isSale: true,
            isReview: false
        },
        {
            name: "Special Item",
            type: 2,
            price1: "20.00",
            price2: "80.00",
            isSale: true,
            isReview: true
        },
        {
            name: "Fancy Product",
            type: 3,
            price1: "40.00",
            isSale: false,
            isReview: false
        },
        {
            name: "Special Item",
            type: 2,
            price1: "40.00",
            price2: "80.00",
            isSale: false,
            isReview: true
        }
    ];

    const jsxListProduct = products.map((product, index) => {
        return <Product key={index} name={product.name} isSale={product.isSale} isReview={product.isReview} type={product.type} price1={product.price1} price2={product.price2} />
    })

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {/* <Product name="Fancy Product" type={1} price1="40.00" price2="80.00" >
                        <h1>Props children</h1>
                    </Product>
                    <Product name="Special Item" isSale={true} isReview={true} type={2} price1="40.00" price2="80.00" />
                    <Product name="Sale Item" isSale={true} type={2} price1="40.00" price2="80.00" />
                    <Product name="Popular Item" isReview={true} price1="40.00" />
                    <Product name="Sale Item" isSale={true} price1="40.00" />
                    <Product name="Special Item" type={2} price1="40.00" price2="80.00" />
                    <Product name="Fancy Product" isSale={true} type={2} price1="40.00" price2="80.00" />
                    <Product name="Special Item" isReview={true} type={2} price1="40.00" price2="80.00" /> */}

                    {jsxListProduct}
                </div>
            </div>
        </section>
    );
}

export default Content;