import React from "react";

export const useGetProducts = () => {
    const [products, setProducts] = React.useState([])
    React.useEffect(()=>{
        const getProductList =async () => {
            const response = await fetch('/api/products')
            const data = await response.json()
            setProducts(data)
        }
        getProductList()
    },[])

    return {
        products
    }
};
