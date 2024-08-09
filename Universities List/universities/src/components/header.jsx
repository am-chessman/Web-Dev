import "./styles/header.css"

export default function Header() {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">UniFinder</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-auto">
                        <input className="form-control me-2" type="search" placeholder="Search for a country or university" aria-label="Search" />
                    </form>
                </div>
            </div>
        </header>
    )
}