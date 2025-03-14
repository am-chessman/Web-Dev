export default function Nav() {
    return(
        <>
            <div className="mt-3 grid sm:grid-cols-1 sm:justify-center grid-cols-[0.5fr_2fr_0.5fr] justify-between items-center">
                <div className="flex justify-center">
                    <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-profilePhoto bg-cover bg-center border-4" style={{borderRadius: "50%", borderTopColor: "#F33535", borderRightColor: "#D8E9F0", borderBottomColor: "#F33535", borderLeftColor: "#29252C"}}>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center mt-4 mb-4 ">
                    <div>
                        <p className="text-5xl sm:text-3xl font-bold text-center">Mark Wabwire</p>
                    </div>
                </div>

                <div className="text-xl sm:text-3xl flex justify-center">
                    <div className="flex justify-end gap-4 sm:gap-8">
                        <a href="https://x.com/markyw086" className="no-underline">                
                            <i className="bi bi-twitter-x text-xl sm:text-2xl text-primary"></i>
                        </a>
                        <a href="https://www.instagram.com/marky_martin0/?next=%2F" target="_blank" className="no-underline">                    
                            <i className="bi bi-instagram text-xl sm:text-2xl text-primary"></i>
                        </a>

                        <a href="https://github.com/am-chessman/" target="_blank" className="no-underline">                    
                            <i className="bi bi-github text-xl sm:text-2xl text-primary"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/mark-wabwire-347286210/" target="_blank" className="no-underline">                    
                            <i className="bi bi-linkedin text-xl sm:text-2xl text-primary"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}