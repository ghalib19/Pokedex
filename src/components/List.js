import React from "react";
import {Col, Container, Row} from "react-bootstrap"

const List = ({pokemon, loading, infoPokemon}) => {
  return (
    <>
      {
        loading ? <h1>loading</h1> :
        pokemon.map((item,i)=>{
          return(
            <>
            <Col key={i} className="small-list">
                <Col className="list-poke rounded" key={item.id} onClick={()=>infoPokemon(item)}>
                  <div ><img src={item.sprites.front_default} className="list-img"/></div>
                  <div className="list-name">{item.name}</div>
                </Col>
            </Col>
            </>
          )
        })
      }
    </>
  )
}

export default List;
