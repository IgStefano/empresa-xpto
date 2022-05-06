import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Contact from "./contact";
import Quotation from "./quotation";
import Services from "./services";

export default function Full() {
    return <>
        <Navbar />
        <Home />
        <Services />
        <Quotation />
        <Contact />
    </>
}