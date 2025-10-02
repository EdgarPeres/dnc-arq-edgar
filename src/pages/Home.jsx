import Header from "../components/header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"

function Home() {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <p>subtitle</p>
            <Button buttonStyle="primary" arrow >olá</Button>
            <Footer/>
        </>
    )
}

export default Home