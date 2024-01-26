import FilterCard from "../FilterCard";
import ListingCard from "../ListingCard";
import { ProductDTO } from "../../models/product";
import { useEffect, useState } from "react";
import * as productService from '../../services/product-service';

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

    useEffect(() => {
        const products = productService.findByPrice(queryParams.priceMin, queryParams.priceMax);
        setProducts(products);
    }, [queryParams]);

    function handleFilter(min: number, max: number) {
        setQueryParams({priceMin: min || 0, priceMax: max || Number.MAX_VALUE});
    }

    return (
        <main>
            <div>
                <FilterCard onFilter={handleFilter} />
                <ListingCard products={products} />
            </div>
        </main>
    );
}

export default ListingBody