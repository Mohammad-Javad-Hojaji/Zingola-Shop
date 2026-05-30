import { Link } from "react-router-dom"
import styled from "./category.module.css"
export default function Category(props) {
    return (
        <div className="col-12 col-md-6 pt-4 ">
            <div className={styled.category}>
                <div className="text-center pt-5 pb-3">
                    <img src={`images/${props.data.imgUrl}`} className="img-fluid" alt="category" />
                </div>

                <Link to={props.data.Linkto} className="btn-outline-success btn mb-5 w-50">
                    {props.data.categoryName}
                </Link>
                <span></span>
            </div>
        </div>
    )
}