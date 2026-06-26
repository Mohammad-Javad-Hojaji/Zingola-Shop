import styled from "./footer.module.css"
import tel from "./../../assets/image/telegram.png"
import ins from "./../../assets/image/instagram.png"
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <footer className="pt-5">
            <div className="container-md">
                <div className="row">
                    <div className="col-12 col-md-6 pb-5">
                        <h3 className="pb-3 bold"> زینگولا؛ همراه شما در سبک زندگی مدرن</h3>
                        <p className="ddd">در دنیای پرشتاب امروز، دسترسی سریع و آسان به کالاهای باکیفیت
                            یک ضرورت است. ما در «زینگولا» کنار هم جمع شده‌ایم تا دو
                            دنیای پرطرفدار یعنی «مد و پوشاک» و «تکنولوژی»
                            را در یک بستر واحد به شما عرضه کنیم.
                            <br />
                            هدف ما در زینگولا ساده است: فراهم کردن بهترین تجربه‌ی خرید
                            آنلاین.

                            چه به دنبال جدیدترین ترندهای پوشاک باشید تا استایل شخصی خود را بسازید و
                            چه در جستجوی گجت‌های الکترونیکی برای ساده‌تر کردن زندگی‌تان باشید، ما در
                            زینگولا با ضمانت کیفیت و اصالت کالا، همراه شما هستیم. زینگولا،
                            جایی که کیفیت با سلیقه شما ملاقات می‌کند.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="pb-4 bold text-center ms-4">راه های ارتباطی</h3>
                        <ul className="text-center">
                            <li className="ddd pb-2">Instagram : @zingola_shop</li>
                            <li className="ddd pb-2">telegram : @zingola_shop</li>
                            <li className="ddd pb-2">Phone : 09939231236</li>
                            <li className="ddd ltr">address : مشهد - چهارراه فهمیده</li>
                        </ul>

                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-9">
                        <p className="ddd small">این سایت متعلق به فروشگاه زینگولا هست.</p>
                    </div>
                    <div className="col-3 ltr">
                        <Link to="">
                            <img src={ins} className={styled.pic} alt="instagram" />
                        </Link>
                        <Link to="">
                            <img src={tel} className={styled.pic} alt="telegram" />
                        </Link>


                    </div>


                </div>
            </div>
        </footer>
    )
}