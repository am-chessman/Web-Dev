const LanguageRow = ({countryISO, countryFlag, countryName, localName, commonName, lang}) => {
    return (
        <div>
            <div className="grid grid-flow-col">
                <div className="grid grid-flow-col">
                    <div title={countryISO}>
                        <img src={countryFlag} alt={countryName} width={"28px"} />
                    </div>
                    <div>
                        <div>
                            {localName}
                        </div>
                        <div>
                            {commonName}
                        </div>
                    </div>
                </div>

                <div>Tick</div>

                <div>
                    {lang}
                </div>
            </div>
        </div>
    )
}


export default LanguageRow