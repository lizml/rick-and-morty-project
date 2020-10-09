import React, {useEffect} from 'react';
import styled from 'styled-components'
import Card from './card'
const CardListStyled = styled.div`
display:grid;
grid-row-gap:2.3em;
display: grid; 
justify-content: center;
padding:4em 2em;

`
function CardList() {
    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data)
        })
        .catch(()=>{
            console.log('hay un error')
        })
    },[])

    return (
        <CardListStyled>
            Cardlist
            <Card
                photo = "https://www.kindpng.com/picc/m/102-1022311_transparent-rick-and-morty-clipart-rick-and-morty.png"
                name = "Rick"
                status = "alive"
                location = "Earth"
                episode = {16}
            />      
        </CardListStyled>
    )
}

export default CardList;