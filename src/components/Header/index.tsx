import './styles.css';
import { useContext } from 'react';
import { ContextProductCount } from '../../utils/context-products';

function Header() {

    const { contextProductCount } = useContext(ContextProductCount);

    return (
        <header>
            <nav className='dsf-container'>
                <h1>DSFilter</h1>
                <h2>{contextProductCount} produto(s)</h2>
            </nav>
        </header>
    );
}

export default Header