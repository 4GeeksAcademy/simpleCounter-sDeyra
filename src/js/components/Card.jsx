import React from "react";

const Card = ({numero}) => {
    return (
        <div className="card mb-3 bg-dark m-1" style={{width:"6rem"}}>
            <h3 className="card-title text-center text-white">
                {numero}
            </h3>

        </div>
    )
}
export default Card;