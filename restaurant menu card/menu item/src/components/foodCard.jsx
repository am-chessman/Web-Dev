export default function FoodCard() {
    return (
        <>
            <div className="card-1">
                <div className="image-section">

                </div>
                <div className="details-section">
                    <div className="header-element-section">
                        <div className="meal-name-section">
                            <h3>
                                A healthy breakfast for vegetarians
                            </h3>
                        </div>
                        <div className="review-section">

                        </div>
                    </div>
                    <div className="meal-description-section">
                        <p>
                            Planning helps make a party perfect keep dinner simple heat frozen. vegetables and precooked smoked sausage together for a complete meal
                        </p>
                    </div>
                    <div className="price-and-delivery-section">
                    <div className="price-object">
                        <div className="object-title">
                            <p>Total price</p>
                        </div>
                        <div className="detail">
                            <p>
                                $114.00
                            </p>
                        </div>
                    </div>
                    <div className="delivery-object">
                        <div className="object-title">
                            <p>Delivery time</p>
                        </div>
                        <div className="detail">
                            <div className="clock-icon">
                                <i class="bi bi-clock"></i>
                            </div>
                            <p>
                                25 mins
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cart-button">
                    <button>
                        <i class="bi bi-bag"></i>
                        <span>Add to cart</span>
                    </button>
                </div>
                </div>
            </div>
            <div className="card-2">
                <div className="image-section">

                </div>
                <div className="details-section">
                    <div className="header-element-section">
                        <div className="meal-name-section">
                            <h3>
                                A healthy breakfast for vegetarians
                            </h3>
                        </div>
                        <div className="price-item">
                            <p>
                                $114.00
                            </p>
                        </div>
                    </div>
                    <div className="review-section">
                        <span>4.5</span>
                        <i class="bi bi-star-fill" style={{color: "#808080"}}></i>
                        <span>·</span>
                        <h3>
                            25 mins
                        </h3>
                        <div className="clock-icon">
                            <i class="bi bi-clock"></i>
                        </div>        
                    </div>
                    <div className="meal-description-section">
                        <p>
                            Planning helps make a party perfect keep dinner simple heat frozen. vegetables and precooked smoked sausage together for a complete meal
                        </p>
                    </div>
                </div>
                <div className="cart-button">
                    <button>
                        <i class="bi bi-bag"></i>
                        <span>Add to cart</span>
                    </button>
                </div>
            </div> 
        </>
    )
}