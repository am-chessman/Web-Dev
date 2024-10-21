const LanguageRow = ({countryISO, countryFlag, countryName, localName, commonName, lang}) => {
    return (
        <>
            <div className="grid grid-cols-2 justify-between pr-3">
                <div className="flex flex-row gap-6">
                    <div title={countryISO}>
                        <img src={countryFlag} alt={countryName} width={"24px"} />
                    </div>
                    <div className="grid justify-start w-[130px]">
                        <div className="text-sm text-wrap text-left">
                            {localName}
                        </div>
                        <div className="text-footertxt text-xs">
                            {commonName}
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 text-sm underline cursor-pointer">
                    {lang}
                </div>
            </div>
        </>
    )
}

export default LanguageRow
