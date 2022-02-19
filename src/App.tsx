import React from "react"
import Header from "./components/header/Header"
import Banner from "./components/banner/Banner"
import AboutUs from "./components/about-us/AboutUs"
import Services from "./components/services/Services"
import Application from "./components/application/Application"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
    return (
        <>
            <Header />
            <Banner />
            <AboutUs />
            <Services />
            <Application />
            <Contact />
            <Footer />
        </>
    )
}

export default App
