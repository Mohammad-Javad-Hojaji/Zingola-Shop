import styled from "./postOffer.module.css"
import picture from "./../../assets/image/samsung a12.png"
import { Link } from "react-router-dom";
function PostOffer() {
    return (
        <>
            <Link>
                <div className={styled.w130}>
                    <div className={styled.PostOffer_wrapper}>
                        <div className={styled.PostOffer_wrapper_img} >
                            <div className="d-flex justify-content-center">
                                <img src={picture} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-center color555 pb-3 px-3">Samsung Galaxy A12 </h4>
                            <p className="text-decoration-line-through text-center text-danger">30,000,000 تومان</p>
                            <p className="text-center text-success pb-4">27,000,000 تومان</p>
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default PostOffer;