import RightPanelElement from "@components/rigtPanelElements";
import elements from "@components/rightPanelElementsArray";

const RightPanel = () => {
    return (
        <>
            <div className="bg-extendedmenu pl-4 pr-4 pt-[32px] pb-4 h-[100%] rounded-2xl">
                <div className="h-full flex flex-col gap-4">
                    {elements.map((element, index) => (
                        <RightPanelElement key={index} svgLogoElement={element.logoSvg} titleElement={element.title} descriptionElement={element.description} arrowSvgElement={element.arrowSvg} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default RightPanel