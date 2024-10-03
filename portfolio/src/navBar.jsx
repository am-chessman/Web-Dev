import "./nav.css"

export default function Nav() {
    return(
        <>
            <div className="nav-bar">
                <div className="left-bar">
                    <h1>MARK WABWIRE</h1>
                </div>
                <div className="right-bar">
                    <div className="link">
                        <a href="#">Work</a>
                    </div>
                    <div className="link">
                        <a href="#">About</a>
                    </div>
                    <div className="link">
                        <a href="#">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}