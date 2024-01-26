import './styles.css';
import React, { useState } from "react";

type Props = {
    onFilter: Function;
}

type FormData = {
    priceMin?: number;
    priceMax?: number;
}

function FilterCard({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormData(formData);
        onFilter(formData.priceMin, formData.priceMax);
    }

    return (
        <div className="dsf-filter-card dsf-container dsf-mb20">
            <form onSubmit={handleFormSubmit} className='dsf-form'>
                <input
                    name="priceMin"
                    value={formData.priceMin || ""}
                    type="text"
                    placeholder="Preço mínimo"
                    onChange={handleInputChange}
                    className="dsf-input dsf-mb20"
                />
                <input
                    name="priceMax"
                    value={formData.priceMax || ""}
                    type="text"
                    placeholder="Preço máximo"
                    onChange={handleInputChange}
                    className="dsf-input dsf-mb20"
                />
                <button type="submit" className='dsf-btn dsf-mb20'>Filtrar</button>
            </form>
        </div>
    );
}

export default FilterCard