import React, {useEffect,useState} from 'react';
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
    const[cardList, setCardList] = useState([])
    async function fetchApi() {
        const response = await fetch(`https://rickandmortyapi.com/api/character/`)
        const data = await response.json()
        return data
      }
     
    
      useEffect(() => {
        fetchApi()
        .then(res => {
          setCardList(res.results)
        }).catch(err => {console.log(err)})
      }, []);
            
    return (
        <CardListStyled>
           { 
                cardList && cardList.map((card)=>{
                     return( 
                        <Card 
                            key = {card.id}
                            photo = {card.image}
                            name = {card.name}
                            status = {card.status}
                            species = {card.species}
                            gender = {card.gender}
                        />  
                     )
                    
                 })
            }
        </CardListStyled>
    )
}

export default CardList;
