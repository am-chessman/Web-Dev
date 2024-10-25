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
            <div className="bg-red-500 flex flex-row justify-center gap-6 font-euclid mr-16 ml-20">  
                <div className="bg-blue-500 pr-20 border-none rounded-2xl w-[95%]">
                    <div className="pl-4">
                        <div className="flex flex-row justify-between gap-10 text-center font-euclid p-4">
                            <div className="justify-center items-center pl-1 pr-1 pt-2 pb-2 text-[14px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Produkter</div>
                            <div className="pl-1 pr-1 pt-2 pb-2 text-[14px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Tjäna pengar med Bolt</div>
                            <div className="pl-1 pr-1 pt-2 pb-2 text-[14px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Företag</div>
                            <div className="pl-1 pr-1 pt-2 pb-2 text-[14px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Säkerhet</div>
                            <div className="pl-1 pr-1 pt-2 pb-2 text-[14px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Hjälp</div>
                            <div className="pl-1 pr-1 pt-2 pb-2 text-[14px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md">Städer</div>
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
                <div>
                    <RightPanel />
                </div>
            </div>
        </>
    )
}

export default ExtendedMenu