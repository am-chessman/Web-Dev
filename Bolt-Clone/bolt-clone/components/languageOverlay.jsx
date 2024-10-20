import LanguageRow from "./languageElement"
import countryComponentList from "@assets/languageComponent"

const LanguageOverlay = () => {
    return (
        <div className="absolute w-[570px] h-[95%] bg-red-400 top-4 left-1/2 -translate-x-1/2 rounded-2xl font-galano">
            <div className="bg-white grid grid-flow-row gap-10 relative justify-center p-10 h-[580px] rounded-2xl">
                <div className="absolute right-[20px] top-2">
                    <i className="bi bi-x-lg text-lg font-bold cursor-pointer"></i>
                </div>
                <div className="relative">
                    <div className="absolute top-2 left-5">
                        <i className="bi bi-search text-2xl font-bold"></i>
                    </div>
                    <input
                        className="font-galano border-2 border-logocolor outline-none w-[440px] pr-16 pl-16 h-12 rounded-lg text-md"
                        type="text"
                        placeholder="Sök regioner..."
                    />
                </div>

                <div className="grid grid-flow-col overflow-y-scroll">
                    <div className="flex flex-col justify-center gap-4">
                        {countryComponentList.map((element) => (
                            <LanguageRow
                                key={element.id}
                                countryISO={element.iso}
                                countryFlag={element.flag}
                                commonName={element.englishName}
                                localName={element.country}
                            />
                        ))}
                    </div>
                    <div className="grid grid-flow-row">
                        {countryComponentList.map((element) => (
                            <div className="grid grid-flow-col justify-start gap-4">
                                {element.languages && element.languages.map((language) => (
                                    <div className="text-sm underline mr-auto flex">
                                        {language}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageOverlay;
