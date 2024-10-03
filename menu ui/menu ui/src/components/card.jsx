import { useState } from "react";

export default function Card() {
const totalItems = [];
for (let i = 0; i <= 10; i++) {
    totalItems.push(i);
}

const [add, setAdd] = useState(0);

function addItem() {
    setAdd((prevAdd) => prevAdd + 1);
}

function removeItem() {
    setAdd((prevAdd) => (prevAdd > 0 ? prevAdd - 1 : 0)); 
}

function resetCart() {
    setAdd(0); 
}

return (
    <>
    <div className="menu-item-container">
        <div className="menu-item-1">
            <div className="menu-content">
                <div className="image-section">
                    
                </div>
                <div className="description-section">
                    <div className="menu-item-header">
                        <h2>Margherita Pizza</h2>
                        <h2 className="price-item">$5.99</h2>
                    </div>
                    <div className="item-description">
                        <p>
                        Pizza, dough, San marzano tomatoes, Fresh mozzarella balls, Fresh basil
                        </p>
                    </div>
                    <div className="item-adder-section">
                        <div className="add-remove-section">
                            <div className="remove">
                                <i className="bi bi-dash-circle-fill" onClick={removeItem}></i>
                            </div>
                            <div className="item-element">
                                <p>{add}</p>
                            </div>
                            <div className="add">
                                <i className="bi bi-plus-circle-fill" onClick={addItem}></i>
                            </div>
                        </div>
                        <div className="delete-btn">
                            <i className="bi bi-trash3" onClick={resetCart}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="menu-item-2">
            <div className="menu-content">
                <div className="image-section">

                </div>
                <div className="description-section">
                    <div className="menu-item-header">
                        <h2>Margherita Pizza</h2>
                        <h2 className="price-item">$5.99</h2>
                    </div>
                    <div className="item-description">
                        <p>
                        Pizza, dough, San marzano tomatoes, Fresh mozzarella balls, Fresh basil
                        </p>
                    </div>
                    <div className="item-adder-section">
                        <select>
                            {totalItems.map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                            ))}
                        </select>
                        <div className="delete-btn">
                            <div className="delete-btn">
                                <i className="bi bi-trash3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
);
}
