const RightPanelElement = ({svgLogoElement, titleElement, descriptionElement, arrowSvgElement}) => {
    return (
        <>
            <div>
                <div className="flex items-start justify-between">
                    <div>
                        <div>
                            {svgLogoElement}
                        </div>
                    </div>
                    <div className="ml-3">
                        <div className="text-[14px] font-bold">
                            {titleElement}
                        </div>
                        <div className="text-[12px] mt-1 mb-2">
                            {descriptionElement}
                        </div>
                    </div>
                    <div className="">
                        <div>
                            {arrowSvgElement}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightPanelElement