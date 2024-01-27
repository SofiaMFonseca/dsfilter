import './styles.css';
import { ProductDTO } from "../../models/product";

type Props = {
    products: ProductDTO[];
}

function ListingCard({ products }: Props) {

    return (
        <div className="dsf-listing-card dsf-container">
            {
                products.map(product =>
                    <>
                        <div className='dsf-listing-card-unit' key={product.id}>
                            <h4>{product.name}</h4>
                            <h3>R$ {product.price.toFixed(2)}</h3>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default ListingCard