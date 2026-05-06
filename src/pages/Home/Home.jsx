import Navbar from "../../components/Navbar/Navbar"
import styled from "./Home.module.css"
import poster from "./../../assets/image/my poster.png"
function Home() {
    return (
        <>
            <Navbar here="home" />
            <div className={styled.poster_wrapper}>
                <div className="container-md">
                    <img src={poster} alt="poster site" />
                </div>
            </div>
        </>
    )
}

export default Home