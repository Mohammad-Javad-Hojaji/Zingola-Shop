import Navbar from "../../components/Navbar/Navbar"
import styled from "./Home.module.css"
import poster from "./../../assets/image/my poster.png"
import PostOffer from "../../components/PostOffer/PostOffer"
import arrowright from "./../../assets/image/arrowright.png"
import arrowleft from "./../../assets/image/arrowleft.png"
import { useState } from "react"

function Home() {
    let all = 9
    const [dRight, setDRight] = useState("none")
    const [dLeft, setDLeft] = useState("inline-block")
    const [right, setRight] = useState(0)
    function rightHandeler() {
        if (right !== 0) {
            setRight(right - 220)
        }
        if(right === 220){
            setDRight("none")
        }
        
        
        setDLeft("inline-block")
    }
    function leftHandeler() {
        if (right !== (all - 1) * 220) {
            setRight(right + 220)
        }
        if(right === (all - 2)*220){
            setDLeft("none")
        }
        setDRight("inline-block")
    }
    console.log(right);

    return (
        <>
            <Navbar here="home" />
            <div className={styled.poster_wrapper}>
                <div className="container-md">
                    <img src={poster} alt="poster site" />
                </div>
            </div>
            <div className={styled.offer_products}>
                <div className="container-md">
                    <h3 className="color555 py-5 mb-5 ms-2">پر تخفیف ترین محصولات</h3>
                    <div className={styled.offer_products_wrapper}>
                        <div className={styled.arrowright} onClick={rightHandeler} style={{display:dRight}}>
                            <img src={arrowright} alt="" className="img-fluid" />
                        </div>
                        <div className={styled.arrowleft} onClick={leftHandeler} style={{display:dLeft}}>
                            <img src={arrowleft} alt="" className="img-fluid" />
                        </div>
                        <div id="postes" className={styled.postes} style={{ translate: `${right}px` }}>
                            <PostOffer />
                            <PostOffer />
                            <PostOffer />
                            <PostOffer />
                            <PostOffer />
                            <PostOffer />
                            <PostOffer />
                            <PostOffer />
                            <PostOffer />
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Home