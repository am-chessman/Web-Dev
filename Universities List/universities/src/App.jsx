import Header from './components/header'
import CountryCard from './components/countryCard'
import Footer from './components/footer'
import './App.css'
import './components/styles/countryCard.css'
import './components/styles/header.css'
import './components/styles/footer.css'

function App() {

    return (
        <div className='body-content'>
            <Header />

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

            <Footer />
        </div>
    )
}

export default App
