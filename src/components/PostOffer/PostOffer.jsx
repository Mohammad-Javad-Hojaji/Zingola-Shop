import styled from "./postOffer.module.css"
import { Link } from "react-router-dom";
function PostOffer(props) {
    return (    
        <>
            <Link>
                <div className={styled.w130}>
                    <div className={styled.PostOffer_wrapper}>
                        <div className={styled.PostOffer_wrapper_img} >
                            <div className="d-flex justify-content-center">
                                <img src={`images/${props.pic}`} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div>
                            <h4 className="text-center color555 pb-3 px-3">{props.name} </h4>
                            <p className="text-decoration-line-through text-center text-danger">{props.mainPrice}</p>
                            <p className="text-center text-success pb-4">{props.offerPrice}</p>
                        </div>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default PostOffer;