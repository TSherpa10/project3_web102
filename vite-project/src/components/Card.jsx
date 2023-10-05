import { useState } from "react";

/* eslint-disable react/prop-types */
const Card = (props) => {
    const [face, setFace] = useState(false);

    const flip = () => {
        setFace(!face);
    }

    return (
    <div className={`cardDiv ${props.color} ${face ? "flip-event" : ""}`} onClick={flip}>
        <div className="cardDiv-inner">
            {!face ? <div className="card-front">          
                <h2>{props.front}</h2>
                {props.img1 && <img src={props.img1} alt="" className="'cardImg"/>}
            </div> : <div className="card-back">
                <h2>{props.back}</h2>
                {props.img2 && <img src={props.img2} alt="" className="cardImg"/>}
            </div>}
        </div>
    </div>
    );
};

export default Card;