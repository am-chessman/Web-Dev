export default function SideBar() {
    return(
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            <span data-feather="home"></span>
                            Africa
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Asia
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Europe
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            North America
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" >
                            South America
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Oceania
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}