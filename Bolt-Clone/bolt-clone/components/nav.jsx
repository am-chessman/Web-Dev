"use client"
import { useRef, useEffect } from "react"
import ExtendedMenu from "./extendedMenu"

const NavigationBar = () => {

    const navBarRef = useRef(null)
    const buttonRef = useRef(null)
    const extendedMenuRef = useRef(null)
    useEffect(() => {
        function handleClick() {
            if (extendedMenuRef.current.classList.contains("hidden")) {
                extendedMenuRef.current.classList.remove("hidden")
                const listSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>`
                setTimeout(2000)
                extendedMenuRef.current.classList.remove("translate-y-[-104%]")
                navBarRef.current.classList.remove("bg-black")
                navBarRef.current.classList.add("bg-orange-400")
                if (buttonRef.current.innerHTML !== listSVG) {
                    buttonRef.current.innerHTML = listSVG
                }
                buttonRef.current.innerHTML = listSVG
                document.body.classList.add("overflow-y-hidden")
            } else {
                extendedMenuRef.current.classList.add("hidden")
                buttonRef.current.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>`
                navBarRef.current.classList.remove("bg-orange-400")
                navBarRef.current.classList.add("bg-black")
            }
        }

        buttonRef.current.addEventListener("click", handleClick)

        return () => {
            buttonRef.current.removeEventListener("click", handleClick)
        }
    }, [])

    return (
        <>
            <nav className="" ref={navBarRef}>
                <div className="flex justify-between align-middle items-center pt-4 pb-4 pr-20 pl-20">
                    <div>
                        <img className="w-12" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjkiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NS4yNjIgMHYzMC4wNzRoLTcuMTM2VjEuNTA0TDU1LjI2MiAwek0zNC45NDUgMzIuOTI0YzEuOTcgMCAzLjU2OCAxLjU4NCAzLjU2OCAzLjUzOCAwIDEuOTU0LTEuNTk4IDMuNTM4LTMuNTY4IDMuNTM4cy0zLjU2OC0xLjU4NC0zLjU2OC0zLjUzOGMwLTEuOTU0IDEuNTk3LTMuNTM4IDMuNTY4LTMuNTM4em0wLTI0LjM4M2M2LjA3NSAwIDExLjAxIDQuODg0IDExLjAxIDEwLjkxOCAwIDYuMDM1LTQuOTM1IDEwLjkyLTExLjAxIDEwLjkyLTYuMDg1IDAtMTEuMDEtNC44ODUtMTEuMDEtMTAuOTIgMC02LjAzNCA0LjkzNS0xMC45MTggMTEuMDEtMTAuOTE4em0wIDE0LjQ1NmMxLjk3MiAwIDMuNTY4LTEuNTgyIDMuNTY4LTMuNTM4IDAtMS45NTUtMS41OTYtMy41MzgtMy41NjgtMy41MzhzLTMuNTY4IDEuNTgzLTMuNTY4IDMuNTM4YzAgMS45NTYgMS41OTYgMy41MzggMy41NjggMy41Mzh6bS0yMi40NDggMGMxLjIzIDAgMi4yMy0uOTkyIDIuMjMtMi4yMWEyLjIyNCAyLjIyNCAwIDAwLTIuMjMtMi4yMTJINy4xNDZ2NC40MjJoNS4zNTF6TTcuMTQ2IDcuMDc3djQuNDIyaDMuOTY0YzEuMjI5IDAgMi4yMy0uOTkzIDIuMjMtMi4yMTJhMi4yMjQgMi4yMjQgMCAwMC0yLjIzLTIuMjFINy4xNDZ6bTExLjkyMiA3LjA5NWMxLjcyNCAxLjY5IDIuNzk1IDQuMDMgMi43ODUgNi42MTQgMCA1LjEzLTQuMTkyIDkuMjg4LTkuMzY2IDkuMjg4SDBWMGgxMS4xYzUuMTczIDAgOS4zNjUgNC4xNTcgOS4zNjUgOS4yODcgMCAxLjc5LS41MDUgMy40Ny0xLjM5NyA0Ljg4NXpNNjguNzQgMTYuMDJoLTMuNTU4djUuNTUzYzAgMS42OC41NDUgMi45MTggMS45NzIgMi45MTguOTIyIDAgMS41OTYtLjIwNiAxLjU5Ni0uMjA2djUuMjA5cy0xLjQ3Ny44ODQtMy40NzkuODg0aC0uMDg5Yy0uMDkgMC0uMTY4LS4wMS0uMjU4LS4wMWgtLjA2OWMtLjA0IDAtLjA5LS4wMS0uMTI5LS4wMS0zLjk4NC0uMjA2LTYuNjktMi42OTItNi42OS03LjAwN1Y1LjA0MWw3LjEzNi0xLjUwM3Y1LjQwNWgzLjU2OHY3LjA3N3oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" alt="Bolt logo" />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-10 font-GalanoClassic">
                        <div>
                            <button className="flex items-center justify-center text-white gap-1.5">
                                <div className="border rounded-full">
                                    <img src="images/flag-for-sweden.svg" alt="" width={"23px"}/>
                                </div>
                                <span className="text-white font-bold">SV</span>
                                <i className="bi bi-caret-down-fill"></i>
                            </button>
                        </div>
                        <div>
                            <a href="" className="text-white">
                                <button className="font-bold">
                                    Hjälp
                                </button>
                            </a>
                        </div>
                        <div>
                            <button className="text-black-400 font-bold bg-white pt-2 pb-2 pr-4 pl-4 align-middle text-center  rounded-3xl">
                                Registrera
                            </button>
                        </div>
                        <div>
                            <button ref={buttonRef} className="text-white text-3xl font-bold outline-none border-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hidden justify-center absolute translate-y-[-104%] w-full h-[780px] -z-10" ref={extendedMenuRef}>
                <ExtendedMenu />
            </div>
        </>
    )
}

export default NavigationBar