import Header from "../components/header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"
import Hero from "../components/Hero/Hero"

function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <Hero />
            </div>
            <Footer />
        </>
    )
}

export default Home