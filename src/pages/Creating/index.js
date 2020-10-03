import React, { useState, useEffect } from 'react'

import axios from 'axios'


import Header from '../../components/Header'
import searchPlayer from '../../utils/searchPlayer'
import handleAddTag from '../../utils/handleAddTag'


// import Footer from '../../components/Footer'
import { Content, HeaderContent, BodyContent, RoundCheck, TeamType, Field, Button, Results, F, S  } from './styles'



const Creating = () =>{
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        
            axios.get(`https://pokeapi.co/api/v2/pokemon/1`).then((res)=>{
        
               setPlayers([res.data])
            }
            )

    },[])
    return(
        <>
            <Header />
            <Content>
                <HeaderContent>
                        <h1>Create your team</h1>
                </HeaderContent>
                <BodyContent>
                    <strong>TEAM INFORMATION</strong>
                    <div className="teamInformation">
                        <div className="left">
                            <h1>Team name</h1>
                            <input type="text" placeholder="insert team name" />

                            <h1>Description</h1>
                            <input type="text" className="inputDescription" />
                        </div>


                        <div className="right">
                            <h1>Team website</h1>
                            <input type="text" placeholder="http://myteam.com" />
                            <TeamType>
                                <h1>Team type</h1>
                                <div className="roundCheckDiv">
                                    <RoundCheck className="roundCheck"  /> <label>Real</label>
                                    <RoundCheck /> <label>Fantasy</label>                                 
                                </div>
                                <h1>Tags</h1>
                              
                            </TeamType>
                        </div>
                    </div>

                    <strong className="strongSquad">CONFIGURE SQUAD</strong>
                    <div className="configureSquad">
                        <div className="left">
                            <strong>Formation</strong>
                            <select name="formation" id="">
                                <option value="1">3 - 2 - 2 - 3</option>
                                <option value="1">3 - 2 - 3 - 1</option>
                                <option value="1">3 - 4 - 3</option>
                                <option value="1">3 - 5 - 2</option>
                                <option value="1">4 - 2 - 3 - 1</option>
                                <option value="1">4 - 3 - 1 - 1</option>
                                <option value="1">4 - 3 - 2</option>
                                <option value="1">4 - 4 - 2</option>
                                <option value="1">4 - 5 - 1</option>
                                <option value="1">5 - 4 - 1</option>
                            </select>
                            <Field>

                            </Field>
                            <Button>Save</Button>
                        </div>
                        <div className="right">
                            <h1>Search Players</h1>
                            <input type="text" placeholder="Ronal"  onKeyDown={(ev) =>{
                                console.log(`Pressed keyCode ${ev.key}`);
                                if (ev.key === 'Enter') {

                                // console.log(`ev ${ev}`);

                                const plays = searchPlayer(ev.currentTarget.value);

                                   setPlayers(plays)

                                }
                            }} />

                                {players && players.map(player => (
                                    <Results key={player.id}>
                                        
                                        <div className="line1">
                                            <F>
                                                <h1>Name:</h1> <p>{player.name}</p>
                                            </F> 
                                            <S>
                                                <h2>Age:</h2> <p>{player.weight}</p>
                                            </S>
                                        </div>
                                        <div className="line2">
                                            <h1> Nacionality:</h1> <p>{player.id}</p>  
                                        </div>
                                    </Results>
                                ))}
                            <Results>
                                <div className="line1">
                                    <F>
                                        <h1>Name:</h1> <p>Cristiano Ronaldo</p>
                                    </F> 
                                    <S>
                                        <h2>Age:</h2> <p>32</p>
                                    </S>
                                </div>
                                <div className="line2">
                                    <h1> Nacionality:</h1> <p>Portugal</p>  
                                </div>
                            </Results>
                            <Results>
                                <div className="line1">
                                   
                                    <F>
                                        <h1>Name:</h1> <p>Ronaldo Luiz de Alves</p>
                                    </F> 
                                    <S>
                                        <h2>Age:</h2> <p>28</p>
                                    </S>
                                </div>
                                <div className="line2">
                                    <h1> Nacionality:</h1> <p>Brazil</p>  
                                </div>
                            </Results>
                            <Results>
                                <div className="line1">
                                    <F>
                                        <h1>Name:</h1> <p>Ronaldo da Silva de Souza</p>
                                    </F> 
                                    <S>
                                        <h2>Age:</h2> <p>18</p>
                                    </S>
                                </div>
                                <div className="line2">
                                    <h1> Nacionality:</h1> <p>Brazil</p>  
                                </div>
                            </Results>

                        </div>

                    </div>
                </BodyContent>

            </Content>
            {/* <Footer /> */}
        </>
    )
}

export default Creating