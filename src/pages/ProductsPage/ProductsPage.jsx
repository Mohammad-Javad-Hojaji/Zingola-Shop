import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./productsPage.module.css"
import { useEffect, useState } from "react";
import arrowright from "./../../assets/image/arrowright.png"
import arrowleft from "./../../assets/image/arrowleft.png"
import PostOffer from "../../components/PostOffer/PostOffer"

export default function ProductsPage() {
    const [dRight, setDRight] = useState("none")
    const [dLeft, setDLeft] = useState("inline-block")
    const [right, setRight] = useState(0)
    const [postData, setPostData] = useState(null)
    const [all, setAll] = useState(0)

    useEffect(() => {

        axios.get("http://localhost:8000/offerProducts").then((data) => {
            setPostData(data.data.data);
            setAll(data.data.count)

        })
    }, [])


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
        if (all <= 2) {
            setDLeft("none")
            return
        }
        if (right !== (all - 1) * 212) {
            setRight(right + 212)
        }
        if (right === (all - 2) * 212) {
            setDLeft("none")
        }
        setDRight("inline-block")
    }
    return (
        <>
            <Navbar here="product" />
            <div className={styled.offer_products}>
                <div className="container-md pt-5">
                    <h3 className="text-light h2 py-5 mb-5 ms-2">پر تخفیف ترین محصولات</h3>
                    {

                        postData ? (
                            <div className={styled.offer_products_wrapper}>
                                <div className={styled.arrowright} onClick={rightHandeler} style={{ display: dRight }}>
                                    <img src={arrowright} alt="" className="img-fluid" />
                                </div>
                                <div className={styled.arrowleft} onClick={leftHandeler} style={{ display: dLeft }}>
                                    <img src={arrowleft} alt="" className="img-fluid" />
                                </div>
                                <div id="postes" className={styled.postes} style={{ translate: `${right}px` }}>
                                    {
                                        postData.map(offerProduct => {
                                            return (
                                                <PostOffer key={offerProduct.id}
                                                    pic={offerProduct.pic} mainPrice={offerProduct.mainPrice}
                                                    name={offerProduct.name} offerPrice={offerProduct.offerPrice} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) :
                            (
                                <div class="d-flex justify-content-center py-5">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only"></span>
                                    </div>
                                </div>

                            )
                    }
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}