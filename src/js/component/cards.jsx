import React from "react";

export const Card = () => {
    return (
        <>
        <div className="card d-inline-flex mx-4 mb-4" style={{width: "18rem"}}>
            <img src="https://i.stack.imgur.com/mwFzF.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-center">Card title</h5>
                <p className="card-text border-bottom">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
            </div>
        </div>
        </>
    )
}