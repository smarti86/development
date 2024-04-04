import { useState } from "react";

// collaborated with other students in section to discuss ideas, structures, strategies. Forgot to collect their names srry
export default function TeeItem({item, addToCart }) {
    const handleAddToCart = () => {
        addToCart(item);
    };


    return (
        <div className="product-info">
            <div className="BakeryItem">
                <img className="bakery-item-image" src={item.image} alt={item.name} />
                <div className="item">
                    <div className="bakery-item-text">
                        <h2 className="bakery-item-label">{item.name}</h2>
                        <p className="bakery-item-description">{item.size}</p>
                        <p className="bakery-item-description">{item.color}</p>
                        <p className="price">${item.price}</p>
                        <button onClick={handleAddToCart} className="button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}