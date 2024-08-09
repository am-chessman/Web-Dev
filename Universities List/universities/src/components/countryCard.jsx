import "./styles/countryCard.css"

export default function CountryCard() {
    return (
        <div className="col-sm-4 country-card">
            <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="${country}" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Click to view universities.</p>
                    <a href="#" className="btn btn-primary">View Universities</a>
                </div>
            </div>
        </div>
    )
}