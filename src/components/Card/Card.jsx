import styled from "./card.module.css"

export default function Card(props) {
    return (
        <div className="col-md-6 col-12 mb-4">
            <div className={styled.card}>
                <img className="" src={props.pic} alt={props.alt} />
                <h4 className="color555 py-4"> {props.title}</h4>
                <span></span>
                <span></span>
                <p></p>
                <p></p>
            </div>
        </div>
    )
}