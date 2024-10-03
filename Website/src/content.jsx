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
                <a href="https://avark.agency/typeterms" target="_blank"><img src="https://avark.agency/typeterms/press-kit/screenshots2.jpg" border="0" width="534" height="280" /></a><br /><span style="font-size: 12px;">Type Terms is the perfect tool for designers to learn the basics of typographic terminology. If you are new to typography or here to refresh your memory, then Type Terms is perfect for you. (via <a href="https://avark.agency">avark.agency</a>).</span>
            </div>
        </>
    )
}