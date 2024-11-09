"use client"
import { useState } from "react";
import Products from "./productsView";
import Earn from "./earnView";
import Business from "./bussinessView";
import Security from "./securityView";
import Help from "./helpView";
import Cities from "./citiesView";
import RightPanel from "./rightPanel";

const ExtendedMenu = () => {
    const [activeView, setActiveView] = useState("products");

    const renderView = () => {
        switch (activeView) {
            case "products":
                return <Products />;
            case "earn":
                return <Earn />;
            case "business":
                return <Business />;
            case "security":
                return <Security />;
            case "help":
                return <Help />;
            case "cities":
                return <Cities />;
            default:
                return <Products />;
        }
    };

    return (
        <>
            <div className="overflow-y-scroll mr-16">
                <div className="ml-20 h-[500px]">
                    <div className="flex flex-row gap-4 font-euclid pb-20 h-[1136px]">
                        <div className="bg-extendedmenu pr-20 border-none rounded-2xl h-full">
                            <div className="pl-4">
                                <div className="flex flex-row justify-between gap-10 text-center font-euclid p-4">
                                    <div
                                        onClick={() => setActiveView("products")}
                                        className="justify-center items-center p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md"
                                    >
                                        Produkter
                                    </div>
                                    <div
                                        onClick={() => setActiveView("earn")}
                                        className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md"
                                    >
                                        Tjäna pengar med Bolt
                                    </div>
                                    <div
                                        onClick={() => setActiveView("business")}
                                        className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md"
                                    >
                                        Företag
                                    </div>
                                    <div
                                        onClick={() => setActiveView("security")}
                                        className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md"
                                    >
                                        Säkerhet
                                    </div>
                                    <div
                                        onClick={() => setActiveView("help")}
                                        className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md"
                                    >
                                        Hjälp
                                    </div>
                                    <div
                                        onClick={() => setActiveView("cities")}
                                        className="p-2 text-[15px] font-bold hover:bg-white hover:cursor-pointer hover:border-none hover:rounded-md"
                                    >
                                        Städer
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="text-[14px]">
                                        {renderView()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mr-4 h-auto w-[250px]">
                            <RightPanel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExtendedMenu;
