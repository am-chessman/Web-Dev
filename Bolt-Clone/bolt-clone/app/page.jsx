
const Home = () => {
    return (
        <>
            <div className="font-euclid">
                <div className="absolute top-0 left-0 -z-10 flex justify-center items-center h-[100vh] overflow-hidden">
                    <div className="bg-gradient-to-b from-darkgradient via-lightgradient to-midgradient">
                        <img src="/images/hero.webp" alt="" className="scale-[1.22]"/>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="font-bold text-[100px]">
                            <p>
                                Åk vart du vill, när du vill
                            </p>
                        </div>
                        <div>
                            <p>
                                Bolt är appen för dig när du behöver ta dig runt i stan. Res tryggt och bekvämt med topprankade förare i Sverige eller svischa förbi trafiken på en scooter eller elcykel.
                            </p>
                        </div>
                        <div>
                            <a href="#">
                                <button>
                                    Ladda ner appen
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home