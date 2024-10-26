import Products from "./productsView"
import Earn from "./earnView"
import Business from "./bussinessView"
import Security from "./securityView"
import Help from "./helpView"
import Cities from "./citiesView"
import RightPanel from "./rightPanel"

const ExtendedMenu = () => {
    return (
        <>
            <div className="h-full">
                <div className="mr-16 ml-20 overflow-hidden">
                    <div className="bg-red-500 flex flex-row justify-center gap-4 font-euclid h-[700px] overflow-y-scroll">  
                        <div className="bg-blue-500 pr-20 border-none rounded-2xl w-[95%] min-h-fit">
                            <div className="pl-4">
                                <div className="flex flex-row justify-between gap-10 text-center font-euclid p-4">
                                    <div className="justify-center items-center p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Produkter</div>
                                    <div className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Tjäna pengar med Bolt</div>
                                    <div className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Företag</div>
                                    <div className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Säkerhet</div>
                                    <div className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Hjälp</div>
                                    <div className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Städer</div>
                                </div>
                                <div className="p-4">
                                    <div className="text-[14px]">
                                        <Products />
                                    </div>
                                    {/* <div>
                                        <Earn />
                                    </div>
                                    <div>
                                        <Business />
                                    </div>
                                    <div>
                                        <Security />
                                    </div>
                                    <div>
                                        <Help />
                                    </div>
                                    <div>
                                        <Cities />
                                    </div> */}
                                </div>
                            </div>                    
                        </div>
                        <div className="mr-4">
                            <RightPanel />
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default ExtendedMenu