import Navbar from "../../components/Navbar/Navbar"
import styled from "./Home.module.css"
import PostOffer from "../../components/PostOffer/PostOffer"
import arrowright from "./../../assets/image/arrowright.png"
import arrowleft from "./../../assets/image/arrowleft.png"
import { useState } from "react"
import pic1 from "./../../assets/image/clothes.png"
import pic2 from "./../../assets/image/charger.png"
import pic3 from "./../../assets/image/dress.png"
import pic4 from "./../../assets/image/phones.png"
import Category from "../../components/Category/Category"
import Category_elect from "./../../assets/image/electronic.png"
import Category_clothes from "./../../assets/image/clothes icon.png"

function Home() {
    let all = 9
    const [dRight, setDRight] = useState("none")
    const [dLeft, setDLeft] = useState("inline-block")
    const [right, setRight] = useState(0)
    function rightHandeler() {
        if (right !== 0) {
            setRight(right - 212)
        }
        if (right === 212) {
            setDRight("none")
        }


        setDLeft("inline-block")
    }
    function leftHandeler() {
        if (right !== (all - 1) * 212) {
            setRight(right + 212)
        }
        if (right === (all - 2) * 212) {
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
                    <div>
                        <h1 className="text-center pt-4 display-2 bold">سایت فروشگاهی زینگولا</h1>
                        <h2 className="text-center h4 pt-4">زینگولا مرجع بزرگ فروش محصولات الکترونیکی و پوشاک</h2>
                    </div>
                    <div className={styled.poster_wrapper_image}>
                        <div>
                            <img src={pic1} alt="" />
                        </div>
                        <div>
                            <img src={pic2} alt="" />
                        </div>

                        <div>
                            <img src={pic3} alt="" />
                        </div>
                        <div>
                            <img src={pic4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styled.offer_products}>
                <div className="container-md">
                    <h3 className="color555 py-5 mb-5 ms-2">پر تخفیف ترین محصولات</h3>
                    <div className={styled.offer_products_wrapper}>
                        <div className={styled.arrowright} onClick={rightHandeler} style={{ display: dRight }}>
                            <img src={arrowright} alt="" className="img-fluid" />
                        </div>
                        <div className={styled.arrowleft} onClick={leftHandeler} style={{ display: dLeft }}>
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
            <div className={styled.Categories}>
                <div className="container-md pt-5">
                    <h3 className="color555">دسته بندی ها</h3>
                    <div className="row  justify-content-between">
                        <Category pic={Category_elect} category="الکترونیک" to="/"/>
                        <Category pic={Category_clothes} category="پوشاک" to="/"/>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Home