import pokemon from './img/logo.png'
import pokeball from './img/pokeball3.png'
import {Col, Container, Row} from "react-bootstrap"

const NavigationBar = () =>{
  return(

    <div>
    <Col className="pokedex text-white">
      <img src={pokeball} className="pokeball" />
      Pokédex
      </Col>
    </div>
  )
}

export default NavigationBar
