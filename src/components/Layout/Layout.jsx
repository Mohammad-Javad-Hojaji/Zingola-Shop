import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ here, children }) {
    return (
        <>
            <Navbar here={here} />
            {
                children
            }
            <Footer />
        </>
    )
}