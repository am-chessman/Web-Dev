import CountryCard from "./countryCard";
// import Header from "./header";

export default function Content() {
    console.log()
    return (
        <div className="container-fluid">
            <div className="row">
                {/* main content */}
                <main className="col-md-9 col-lg-10 px-md-4">
                    <div id="content-area" className="row">
                        <CountryCard />
                    </div>
                </main>
            </div>
        </div>
    )
}