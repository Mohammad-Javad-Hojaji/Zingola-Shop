import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import styled from "./productsPage.module.css"
import { useEffect, useState } from "react";
import arrowright from "./../../assets/image/arrowright.png"
import arrowleft from "./../../assets/image/arrowleft.png"
import PostOffer from "../../components/PostOffer/PostOffer"
import Category from "../../components/Category/Category";
import PricesProdcuts from "../../components/PricesProducts/PricesProdcuts";

export default function ProductsPage() {
    const [dRight, setDRight] = useState("none")
    const [dLeft, setDLeft] = useState("inline-block")
    const [right, setRight] = useState(0)
    const [postData, setPostData] = useState(null)
    const [all, setAll] = useState(0)
    const [categoryData, setCategoryData] = useState(null)
    const [electronicData, setElectronicData] = useState(null)
    const [poshakData, setPoshakData] = useState(null)

    useEffect(() => {

        axios.get("http://localhost:8000/offerProducts").then((data) => {
            setPostData(data.data.data);
            setAll(data.data.count)


        })
        axios.get("http://localhost:8000/categories").then((data) => {
            setCategoryData(data.data.CategoriesShow);

        })
        axios.get("http://localhost:8000/products?categoryId=1&pageCategory=1").then(data => {
            setElectronicData(data.data)


        })
        axios.get("http://localhost:8000/products?categoryId=2&pageCategory=1").then(data => {
            setPoshakData(data.data)
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
                                <div className="d-flex justify-content-center py-5">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only"></span>
                                    </div>
                                </div>

                            )
                    }
                </div>
            </div>

            <div className={styled.Categories}>
                <div className="container-md pt-5">
                    <h3 className="color555">دسته بندی ها</h3>
                    <div className="row  justify-content-around">
                        {
                            categoryData ?
                                categoryData.map(data => {

                                    return (
                                        <Category data={data} key={data.id} />
                                    )

                                }) :
                                (
                                    <div className="d-flex justify-content-center py-5">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only"></span>
                                        </div>
                                    </div>

                                )
                        }
                    </div>
                </div>
            </div>

            <div className={styled.productsPostsElectro}>
                <div className="container-md pt-5 ">
                    <h2 className="color555">
                        لوازم الکترونیک
                    </h2>
                    <div className="pt-3">
                        <div className="row ">
                            {
                                electronicData ? (
                                    electronicData.map((value) => (
                                        <div className="col-3">
                                            <PricesProdcuts key={value.id} pic={value.pic} name={value.name} mainPrice={value.mainPrice} offerPrice={value.offerPrice} />
                                        </div>
                                    ))
                                )
                                    :
                                    (
                                        <div className="d-flex justify-content-center py-5">
                                            <div className="spinner-border" role="status">
                                                <span className="sr-only"></span>
                                            </div>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={styled.productsPostsPoshak}>
                <div className="container-md pt-5 ">
                    <h2 className="color555">
                        پوشاک
                    </h2>
                    <div className="pt-3">
                        <div className="row">
                            {
                                poshakData ? (
                                    poshakData.map((value) => (
                                        <div className="col-3">
                                            <PricesProdcuts key={value.id} pic={value.pic} name={value.name} mainPrice={value.mainPrice} offerPrice={value.offerPrice} />
                                        </div>
                                    ))
                                )
                                    :
                                    (
                                        <div className="d-flex justify-content-center py-5">
                                            <div className="spinner-border" role="status">
                                                <span className="sr-only"></span>
                                            </div>
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}