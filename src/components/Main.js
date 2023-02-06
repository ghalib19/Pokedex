import {Col, Container, Row} from "react-bootstrap"
import NavigationBar from './NavigationBar'
import next from './img/next.png'
import prev from './img/prev.png'
import List from './List'
import Detail from './Detail'
import Footer from './Footer'
import React from "react";
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";


//list-pokemon
const Main = () => {
  const[pokeData,setPokeData]=useState([]);
  const[loading,setLoading]=useState(true)
  const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
  const[nextUrl,setNextUrl]=useState();
  const[prevUrl,setPrevUrl]=useState();
  const[pokeDex,setPokeDex]=useState();

  const pokeFun=async()=>{
    setLoading(true)
    const res = await axios.get(url);
    //console.log(res.data);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results)
    setLoading(false)
  }

  const getPokemon = async(res) => {
    res.map(async(item) => {
      //console.log(item.url)
      const result = await axios.get(item.url)
      //console.log(result.data)
      setPokeData(state=>{
        state=[...state,result.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
        return state;
      })
    })
  }

  useEffect(()=>{
    pokeFun();
  },[url])
  return (
        <>
          <div className="bg">
            <NavigationBar/>
            <div>
              <Detail data={pokeDex} />
            </div>
            <div>
          <Container className="pokedex-top ">
            <Col>
              { prevUrl ? <button className="btn-prv" onClick={()=>{
                setPokeData([])
                setUrl(prevUrl)
              }}><img src={prev} className="but"/></button>
              :
              <button className="btn-prv" disabled><img src={prev} className="but"/></button>}
            </Col>
              <Row className="biglist rounded">
              <div className="pokemon-list text-white">Pokémon List</div>
              <List pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
              </Row>
            <Col>
            { nextUrl ? <button className="btn-nxt" onClick={()=>{
              setPokeData([])
              setUrl(nextUrl)
            }}><img src={next} className="but"/></button>
            :
            <button className="btn-nxt" disabled><img src={next} className="but"/></button>}
            </Col>
          </Container>
        </div>
          <div className="footer">
            <Footer/>
          </div>
      </div>
    </>
  );
}

export default Main;
