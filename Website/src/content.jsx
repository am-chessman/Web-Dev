export default function Body() {
    
    const currentYear = new Date().getFullYear()

    return(
        <>
            <div className="main-content">
                <div className="name-section">
                    Hey I&apos;m Mark 👋
                </div>
                <div className="description-section">
                    A Full Stack Developer based in Sigtuna, Stockholm
                </div>
                <div className="socials-section">
                    <a href="https://x.com/markyw086">                
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="https://www.instagram.com/marky_martin0/?next=%2F">                    
                        <i className="bi bi-instagram"></i>
                    </a>

                    <a href="https://github.com/">                    
                        <i className="bi bi-github"></i>
                    </a>
                </div>

                <div className="copyright-section">
                    <span>&#169; Mark Wabwire {currentYear}</span>
                </div>
            </div>
        </>
    )
}