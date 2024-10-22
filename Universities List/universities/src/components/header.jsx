import "./styles/header.css";
import { useState } from "react";
import { countriesList } from "./countries";


export default function Header() {
    const [searchText, setSearchText] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);

    function handleSearchTextChange(event) {
        const value = event.target.value;
        setSearchText(value);
        searchedText(value);  
    }

    function searchedText(searchText) {
        const filtered = countriesList.filter(country =>
            country.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredCountries(filtered);
    }

    console.log(filteredCountries)
// 
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <header className="navbar navbar-expand-lg navbar-light bg-light">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0" onSubmit={handleFormSubmit}>
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchText}
                                onChange={handleSearchTextChange}
                                
                            />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        </>
    );
}

// export {filteredCountries}