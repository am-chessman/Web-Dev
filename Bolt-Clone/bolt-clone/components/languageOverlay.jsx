import LanguageRow from "./languageElement"
import countryComponentList from "@assets/languageComponent"

const LanguageOverlay = () => {
    return (
        <>
            <div className="absolute w-[550px] top-10 left-1/2 -translate-x-1/2 ">
                <div className="bg-blue-500 grid grid-flow-row relative justify-center p-10 h-[500px] overflow-hidden">
                    <div className="absolute">
                        <i className="bi bi-x-lg"></i>
                    </div>
                    <div className="relative">
                        <div className="absolute top-2 left-5">
                            <i className="bi bi-search text-2xl font-bold"></i>
                        </div>
                        <input className="font-galano border-2 border-logocolor outline-none w-[440px] pr-16 pl-16 h-12 rounded-lg text-md" type="text" name="" id="" height={"40px"} placeholder="Sök regioner..."/>
                    </div>

                    <div className="grid grid-flow-row">
                        {countryComponentList.map((element) => (
                            <LanguageRow key={element.id} countryISO={element.iso} countryFlag={element.flag} commonName={element.englishName} localName={element.country} lang={element.languages}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LanguageOverlay