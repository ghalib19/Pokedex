import React from "react";
import {Col, Container, Row} from "react-bootstrap"
import {useState} from "react";
import {useEffect} from "react";

const Detail = ({data}) => {
  console.log(data)
  return(
    <>
    {
      (!data)?
      //true condition
        <Container className="pokedex-bottom">
          <div className="pokemon-info text-white">Pokémon Info</div>
        </Container>
      :
      //false condition
      (
        //Pokemon Info
        <>
        <Container className="pokedex-bottom">
            <div className=" col-sm-4" >
              <Row >
              {/* title */}
                <div className="pokemon-info text-white">Pokémon Info</div>
                {/* Pokemon Poster */}
                <div className="poster">
                  <img src={data.sprites.other.home.front_default} className="detail-img"/>
                  <div className="poke-name text-white"> {data.name}</div>
                </div>
              </Row>
            </div>
            {/* Pokemon Detail */}
            <div className="col-sm-8" >
              <table className="detail">
                {/* Start Left Pokemon Detail  */}
                <tr>
                <td className="left-detail">
                  {/* Start Info */}
                  <tr>
                    <td className="info-title">Info</td>
                    <td className="info-name">
                      <div>Pokedex No.</div>
                      <div>Name </div>
                      <div>Weight</div>
                      <div>Height </div>
                    </td>
                    <td className="info-detail">
                      <div>{data.id}</div>
                      <div>{data.name}</div>
                      <div>{data.weight}</div>
                      <div>{data.height} </div>
                    </td>
                  </tr>
                  {/* End Info */}
                </td>
                {/* End Left Pokemon Detail  */}

                {/* Right Pokemon Detail */}
                <td rowlspan="4" className="middle-detail">
                {/* Start Stats */}
                  <tr >
                    <td className="stats-title">Stats</td>
                    <td className="stats-name">{
                      data.stats?.map((poke)=>(
                        < tr >{poke.stat.name}</tr>
                      ))} </td>
                    <td className="stats-detail">{
                      data.stats?.map((poke)=>(
                        <div>{poke.base_stat}</div>
                      ))}
                    </td>
                  </tr>
                  {/* End Stats */}
                  </td>
                  <td className="right-detail ">
                  {/* Start Type */}
                  <tr>
                    <td className="type-title">Type</td>
                    <td className="type-detail">
                    {
                      data.types?.map((poke)=>(
                        <tr >{poke.type.name}</tr>
                    ))}
                    </td>
                  </tr>
                  {/* End Type */}

                  {/* Start Abilities */}
                  <tr>
                    <td className="abilities-title">Abilities</td>
                    <td className="abilities-detail">
                    {
                      data.abilities?.map((poke)=>(
                        <tr >{poke.ability.name}</tr>
                    ))}
                    </td>
                  </tr>
                  {/* End Abilities */}
                  </td>
                  </tr>
                  <tr >
                    <div className="moves">
                      <td className="moves-title"> Moves</td>
                      <td className="moves-data">{
                        data.moves?.map((poke)=>(
                          <Col >{poke.move.name}</Col>
                        ))}
                      </td>
                    </div>
                  </tr>
                </table>
              </div>
          </Container>
        </>
      )
    }
  </>
  )
}

export default Detail;
