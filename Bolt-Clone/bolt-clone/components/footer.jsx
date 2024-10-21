"use client"

import LanguageOverlay from "./languageOverlay"

const Footer = () => {

    let currentDate = new Date().getFullYear()

    return (
        <>
            <footer className="font-galano pr-20 pl-20 pb-20">
                <div>
                    <div className="grid items-start grid-flow-col relative">
                        <div className="grid justify-items-start gap-8">
                            <div>
                                <img src="images/bolt-logo.webp" alt="Bolt logo" width={"69px"} height={"40px"} />
                            </div>
                            <div className="flex flex-row justify-center items-center gap-10 font-GalanoClassic">
                                <div>
                                    <button className="flex items-center justify-center text-gray-600 gap-2">
                                        <div className="border-none">
                                            <img src="images/flag-for-sweden.svg" alt="" width={"28px"}/>
                                        </div>
                                        <span className="text-gray-600 font-bold">SV</span>
                                        <i className="bi bi-caret-down-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="text-customgray text-lg pb-6 font-bold">Bolt</div>
                            <div className="grid gap-4">
                                <div ><a href="/" className="hover:text-logocolor">Resor</a></div>
                                <div><a href="/food" className="hover:text-logocolor">Matleverans</a></div>
                                <div><a href="/food/market" className="hover:text-logocolor">Matvaruleverans</a></div>
                                <div><a href="/scooters" className="hover:text-logocolor">Scootrar</a></div>
                                <div><a href="/drive" className="hover:text-logocolor">Bildelning</a></div>
                                <div><a href="/bussiness" className="hover:text-logocolor">Företag</a></div>
                                <div><a href="/airports" className="hover:text-logocolor">Flygplatser</a></div>
                                <div><a href="/cities" className="hover:text-logocolor">Städer</a></div>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg text-customgray pb-6 font-bold">Bli partner med Bolt</div>
                            <div className="grid gap-4">
                                <div><a href="/driver" className="hover:text-logocolor">Register as a driver</a></div>
                                <div><a href="/food/courier" className="hover:text-logocolor">Register as a courier</a></div>
                                <div><a href="/fleet" className="hover:text-logocolor">Åkerier</a></div>
                                <div><a href="/franchise" className="hover:text-logocolor">Franchise</a></div>
                            </div>
                        </div>
                        <div>
                            <div className="text-lg text-customgray pb-6 font-bold">Företag</div>
                            <div className="grid gap-4">
                                <div><a href="/careers/life-at-bolt" className="hover:text-logocolor">Om oss</a></div>
                                <div><a href="/careers" className="hover:text-logocolor">Karriär</a></div>
                                <div><a href="/sustainability" className="hover:text-logocolor">Sustainability at Bolt</a></div>
                                <div><a href="/press" className="hover:text-logocolor">Press</a></div>
                                <div><a href="/blog" className="hover:text-logocolor">Blogg</a></div>
                                <div><a href="/press/guidelines" className="hover:text-logocolor">Riktlinjer för varumärket</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 mb-6">
                        <div className="flex justify-between">
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/BoltSweden/" className="border-none bg-lightgray flex items-center justify-center w-5 h-5 p-5 rounded-full">
                                    <i className="bi bi-facebook text-2xl font-bold"></i>
                                </a>
                                <a href="https://x.com/Boltapp/" className="border-none bg-lightgray flex items-center justify-center w-5 h-5 p-5 rounded-full">
                                    <i className="bi bi-twitter-x text-2xl font-bold"></i>
                                </a>
                                <a href="https://www.instagram.com/bolt/" className="border-none bg-lightgray flex items-center justify-center w-5 h-5 p-5 rounded-full">
                                    <i className="bi bi-instagram text-2xl font-bold"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/bolt-eu/" className="border-none bg-lightgray flex items-center justify-center w-5 h-5 p-5 rounded-full">
                                    <i className="bi bi-linkedin text-2xl font-bold"></i> 
                                </a>
                                <a href="https://www.tiktok.com/@bolt" className="border-none bg-lightgray flex items-center justify-center w-5 h-5 p-5 rounded-full">
                                    <i className="bi bi-tiktok text-2xl font-bold"></i>
                                </a>
                            </div>
                            <div className="font-sans flex gap-4">
                                <div>
                                    <button className=" text-customgray font-bold pt-2 pb-2 pr-4 pl-4 rounded-3xl bg-lightgray cursor-pointer transition-all duration-500 hover:bg-btnhover">Ladda ner Bolt-appen</button>
                                </div>
                                <div>
                                    <button className="text-customgray font-bold pt-2 pb-2 pr-4 pl-4 rounded-3xl bg-lightgray cursor-pointer transition-all duration-500 hover:bg-btnhover">Ladda ner Bolt Food-appen</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="mt-8">
                        <div className="flex justify-between">
                            <div className="font-sans font-medium text-footertxt">
                                <span className="text-lg">&copy;</span> {currentDate} Bolt Technology OÜ
                            </div>
                            <div className="flex gap-6 text-footertxt">
                                <div>
                                    <a href="/suppliers" className="hover:text-logocolor">Leverantörer</a>
                                </div>
                                <div>
                                    <a href="/legal" className="hover:text-logocolor">Allmänna villkor</a>
                                </div>
                                <div>
                                    <a href="/privacy" className="hover:text-logocolor">Integritet</a>
                                </div>
                                <div>
                                    <a href="/cookie-declaration" className="hover:text-logocolor">Cookies</a>
                                </div>
                                <div>
                                    <a href="/security" className="hover:text-logocolor">Säkerhet</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="overlay hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
                <LanguageOverlay />
            </div> 
        </>
    )
}

export default Footer