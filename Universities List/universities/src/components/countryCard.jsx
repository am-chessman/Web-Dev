import PropTypes from "prop-types";
import "./styles/countryCard.css";
import {countriesList} from "./countries";

export default function CountryCard() {
    function Card(props) {
        return (
            <div className="col-sm-4 country-card">
                <div className="card">
                    <img src="https://via.placeholder.com/150" className="card-img-top" alt="Country image" />
                    <div className="card-body">
                        <h5 className="card-title">{props.country}</h5>
                        <p className="card-text">Click to view universities.</p>
                        <a href="#" className="btn btn-primary">View Universities</a>
                    </div>
                </div>
            </div>
        );
    }

    Card.propTypes = {
        country: PropTypes.string.isRequired,
    };

    return (
        <div className="row">
            {countriesList.map((land, index) => (
                <Card key={index} country={land} />
            ))}
        </div>
    );
}
