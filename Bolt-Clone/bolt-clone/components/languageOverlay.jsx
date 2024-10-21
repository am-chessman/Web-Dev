"use client"

import LanguageRow from "./languageElement"
import countryComponentList from "@assets/languageComponent"
import { useEffect, useState } from "react";

const LanguageItem = ({lang}) => {
    return (
        <div >
            {lang}
        </div>
    )
}

const LanguageOverlay = () => {

    const [userInput, setInput] = useState("")
    const [filteredCountries, setFilteredCountries] = useState(countryComponentList)

    const handleInput = (e) => {
        setInput(e.target.value)
        filterCountries(e.target.value)
    }

    function filterCountries(searchText) {
        const filtered = countryComponentList.filter(country =>
            country.englishName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredCountries(filtered);
    }

    return (
        <div className="absolute w-[600px] h-[95%] bg-red-400 top-4 left-1/2 -translate-x-1/2 rounded-2xl font-galano">
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
                        onChange={handleInput}
                        onSubmit={((e) => {
                            e.preventDefault()
                        })}
                        value={userInput}
                    />
                </div>

                <div className="grid grid-flow-col justify-start items-start overflow-y-scroll pr-5 pl-5">
                    <div className="h-[580px]">
                        <div className="flex flex-col justify-center gap-6 overflow-hidden">
                            {filteredCountries && filteredCountries.map((element) => (
                                <LanguageRow
                                    key={element.id}
                                    countryISO={element.iso}
                                    countryFlag={element.flag}
                                    commonName={element.englishName}
                                    localName={element.country}
                                    lang={element.languages.map((language, index) => (
                                        <LanguageItem lang={language} key={index}/>
                                    ))}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageOverlay;
