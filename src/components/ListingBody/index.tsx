import FilterCard from "../FilterCard";
import ListingCard from "../ListingCard";
import { ProductDTO } from "../../models/product";
import { useContext, useEffect, useState } from "react";
import * as productService from '../../services/product-service';
import { ContextProductCount } from "../../utils/context-products";

type QueryParams = {
    priceMin: number;
    priceMax: number;
}

function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [queryParams, setQueryParams] = useState<QueryParams>({
        priceMin: 0,
        priceMax: Number.MAX_VALUE
    });

    const { setContextProductCount } = useContext(ContextProductCount);

    useEffect(() => {
        const products = productService.findByPrice(queryParams.priceMin, queryParams.priceMax);
        setProducts(products);
        setContextProductCount(products.length);
    }, [queryParams]);

    function handleFilter(min: number, max: number) {
        setQueryParams({ priceMin: min || 0, priceMax: max || Number.MAX_VALUE });
    }

    return (
        <main>
            <div className="dsf-padding-body">
                <FilterCard onFilter={handleFilter} />
                <ListingCard products={products} />
            </div>
        </main>
    );
}

export default ListingBody