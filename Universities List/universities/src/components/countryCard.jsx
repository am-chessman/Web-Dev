import PropTypes from "prop-types";
import "./styles/countryCard.css";
import {countriesList} from "./countries";
import { useEffect, useState } from "react";

export default function CountryCard() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/api/data/")
            .then(response => response.json())
            .then((data) => {
                setData(data)
            }).catch((error) => {
                console.error(`Error fetching data from API: ${error}`)
            });
    }, [])

    console.log(data)
    function Card(props) {
        return (
            <div className="col-sm-4 country-card">
                <div className="card">
                    <img src="https://flagcdn.com/16x12/ua.png" className="card-img-top" alt="Country image" />
                    <div className="card-body">
                        <h5 className="card-title">{props.country}</h5>
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
