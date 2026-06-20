import Navbar from "../../components/Navbar/Navbar"
import styled from "./Home.module.css"
import PostOffer from "../../components/PostOffer/PostOffer"
import arrowright from "./../../assets/image/arrowright.png"
import arrowleft from "./../../assets/image/arrowleft.png"
import { useEffect, useState } from "react"
import pic1 from "./../../assets/image/clothes.png"
import pic2 from "./../../assets/image/charger.png"
import pic3 from "./../../assets/image/dress.png"
import pic4 from "./../../assets/image/phones.png"
import Category from "../../components/Category/Category"
import axios from "axios"
import Card from "../../components/Card/Card"
import Security from "./../../assets/image/security shopping.png"
import Various_installments from "./../../assets/image/Various installments.png"
import shoppingCard from "./../../assets/image/shopping card e.png"
import HighVariety from "./../../assets/image/High variety.png"
import Article from "../../components/Article/Article"


function Home() {
    const [dRight, setDRight] = useState("none")
    const [dLeft, setDLeft] = useState("inline-block")
    const [right, setRight] = useState(0)
    const [postData, setPostData] = useState([])
    const [all, setAll] = useState(0)
    const [categoryData, setCategoryData] = useState([])
    const [articles, setArticles] = useState([])


    useEffect(() => {

        axios.get("http://localhost:8000/offerProducts").then((data) => {
            setPostData(data.data.data);
            setAll(data.data.count)

        })
        axios.get("http://localhost:8000/categories").then(data => {
            setCategoryData(data.data.CategoriesShow)
        })
        axios.get("http://localhost:8000/posts").then(data=>{
           setArticles(data.data.favoritePosts)
            
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
                </div>
            </div>
            <div className={styled.Categories}>
                <div className="container-md pt-5">
                    <h3 className="color555">دسته بندی ها</h3>
                    <div className="row  justify-content-around">
                        {
                            categoryData.map(data => {
                                return (
                                    <Category data={data} key={data.key} />
                                )

                            })
                        }
                    </div>
                </div>
            </div>
            <div className={styled.whyUs}>
                <div className="container-md my-5 pt-3">
                    <h3 className="color555 mb-5">
                        چرا زینگولا با دیگران متفاوت هست؟!
                    </h3>
                    <div className="row">
                        <Card title={"امنیت در خرید"} pic={Security} alt={"security shopping"} />
                        <Card title={" اقساط متنوع "} pic={Various_installments} alt={"Various installments"} />
                        <Card title={"راحتی در خرید"} pic={shoppingCard} alt={"Shopping Card"} />
                        <Card title={"تنوع بالا"} pic={HighVariety} alt={"High Variety"} />
                    </div>
                </div>
            </div>

            <div className={styled.lastPostes}>
                <div className="container-md">
                    <h3 className="color555">مقالات اخیر
                        <span className="ps-3 h6 text-primary pointer">دیدن موارد بیشتر  &gt;</span>
                    </h3>
                    <div className="row justify-content-between">
                            {
                                articles.map((article)=>{
                                    return(
                                        <Article article={{subtitle:article.subtitle,imgUrl:article.imgUrl,title:article.title}}/>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Home