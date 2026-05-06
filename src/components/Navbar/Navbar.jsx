
import Icon from "./../../assets/image/Myicon.png"
import styled from "./Navbar.module.css"
import search from "./../../assets/image/image.png"
import shoppingcard from "./../../assets/image/iconShoppingcard.png"
import LinkNavbar from "../linkNavbar/LinkNavbar"
import houseIcon from "./../../assets/image/houseicon.png"
import product from "./../../assets/image/product.png"
import dropdown from "./../../assets/image/dropdown.png"
import contact from "./../../assets/image/contact.png"
import info from "./../../assets/image/about.png"



function Navbar(props) {
    let color = props.here
    let colorNav = {
        home: "#fff",
        product: "#fff",
        dastebandi: "#fff",
        about: "#fff",
        contact: "#fff",
    }
    switch (color) {
        case "home":
            colorNav.home = "#111"
            break;
        case "about":
            colorNav.about = "#111"
            break;
        case "product":
            colorNav.product = "#111"
            break;
        case "dastebandi":
            colorNav.dastebandi = "#111"
            break;
        case "contact":
            colorNav.contact = "#111"
            break;

    }
    console.log(color);

    console.log(colorNav);

    return (
        <div className={styled.Navbar}>
            <div className="container-md">
                <div className={styled.navbar_wrapper}>

                    <div className={styled.navnbar_up}>
                        <div className={styled.navnbar_up_wrapper}>
                            <div className={styled.navnbar_up_up}>
                                <img src={Icon} alt="icon" />
                                <p className="h5">زینگولا</p>
                            </div>

                            <div className={styled.searchbox_Div}>
                                <input type="text" className={styled.searchbox} placeholder="دنبال چه چیزی می گردید؟" />
                                <img src={search} alt="" />
                            </div>

                        </div>
                        <div className={styled.navnbar_up_down}>
                            <img src={shoppingcard} alt="" srcset="" />
                            <a href="/" className="btn  btn-outline-primary">ورود | ثبت نام</a>
                        </div>

                    </div>
                    <div className={styled.navnbar_down}>
                        <ul className="m-0 p-0 ">
                            <LinkNavbar color={colorNav.home} to="/" icon={houseIcon} text="خانه" />
                            <LinkNavbar color={colorNav.product} to="/" icon={product} text="محصولات" />
                            <LinkNavbar color={colorNav.dastebandi} to="/" icon={dropdown} text="دسته بندی ها" />
                            <LinkNavbar color={colorNav.about} to="/" icon={info} text="درباره " />
                            <LinkNavbar color={colorNav.contact} to="/" icon={contact} text="تماس با ما" />
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar