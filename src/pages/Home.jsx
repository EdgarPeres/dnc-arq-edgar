import Header from "../components/header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"
import Banner from "../components/Banner/Banner"

function Home() {
    return (
        <>
            <Header />
            <Banner title="Home" image="About.jpg" />
            <Button buttonStyle="primary" arrow >olá</Button>
            <Footer />
        </>
    )
}

export default Home