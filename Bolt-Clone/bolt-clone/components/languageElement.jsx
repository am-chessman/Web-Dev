const LanguageRow = ({countryISO, countryFlag, countryName, localName, commonName, lang}) => {
    return (
        <>
            <div className="grid grid-flow-col justify-start">
                <div className="flex flex-row gap-6">
                    <div title={countryISO}>
                        <img src={countryFlag} alt={countryName} width={"24px"} />
                    </div>
                    <div className="grid justify-start">
                        <div className="text-sm text-wrap text-left">
                            {localName}
                        </div>
                        <div className="text-footertxt text-xs">
                            {commonName}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LanguageRow
