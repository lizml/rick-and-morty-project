import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
width: 264px;
box-shadow: 0 0 7px 2px rgba(0,0,0,0.03);
text-align:left;
overflow-hidden;
border-radius:5px;
img{
    width: 100%;
    height: 160px;
    object-fit:cover;
}
.details{
    padding:1.5em;
}
h2{
    margin:0;
    margin-bottom:1rem;
    font-size:18px;
    font-weight:700;
}
p{
    font-size:.9em;
    margin-bottom:.5rem;
}
`
function Card({
    photo,
    name,
    status,
    location,
    episode,
}) {
    return (
        <CardStyled>
            <img src= {photo} alt=""/>
            <div className = "details">
                <h2>{name}</h2>
                <p><strong>Status:</strong>{status}</p>
                <p><strong>Location:</strong>{location}</p>
                <p><strong>Episode</strong>{episode}</p>
            </div>
            
        </CardStyled>
    );
}

export default Card;