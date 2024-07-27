import { Outlet } from "react-router-dom"

const ProductListPage = () => {
    return (
        <>
            <div>List of products page</div>
            <Outlet />
        </>
    )
}

export default ProductListPage