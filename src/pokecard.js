import React from "react";

const Pokecard = (props) => {
    const { id, name, type, base_experience } = props.pokemon;
    let imgsrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="col-3 mt-2">
            <div className="card">
                <img src={imgsrc} />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p className="card-text">Type: {type} <br /> EXP: {base_experience}</p>
                </div>
            </div>
        </div>
    )
}

export default Pokecard;