import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'

import axios from 'axios'


import Header from '../../components/Header'
import searchPlayer from '../../utils/searchPlayer'


// import Footer from '../../components/Footer'
import { Content, HeaderContent, BodyContent, RoundCheck, TeamType, Field, Button, Results, F, S  } from './styles'



const Creating = () =>{
    const [players, setPlayers] = useState([])
    const [tags, setTags] = useState([])

    function validade(event){
        const h1 = document.getElementById(`${event.currentTarget.id}-h1`)
        if (event.key === 'Enter' || event.key === 'Tab'){
            if(event.currentTarget.value === ''){
                h1.style.color = '#cc0066'
                event.currentTarget.style.borderColor = '#cc0066'
            }else{
                h1.style.color = 'black'
                event.currentTarget.style.borderColor = '#999'
            }
        }
    }

    function selected(type){

        const selectLabelReal = document.getElementById('label-real')
        const selectLabelFantasy = document.getElementById('label-fantasy')

        if(type === 'real' && selectLabelReal.className !== 'selected'){
            selectLabelReal.className = 'selected'
            selectLabelFantasy.className = 'notSelected'
        }
        
        if(type === 'fantasy' && selectLabelFantasy.className !== 'selected'){
            selectLabelReal.className = 'notSelected'
            selectLabelFantasy.className = 'selected'
        }
        
    }

    function handleAddTag(event){
        if (event.key === 'Enter' || event.key === ';'){
            setTags([...tags, event.target.value])
            event.target.value = ''
        }
    }

    function removeTags(indexToRemove){
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};

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
                
                {/* <form  name="register"> */}
                <BodyContent>

                    <strong>TEAM INFORMATION</strong>
                    <div className="teamInformation">
                        <div className="left">
                            <h1 id="insert-team-name-h1">Team name</h1>
                            <input type="text" placeholder="insert team name" id="insert-team-name" onKeyDown={(ev)=> validade(ev) } />

                            <h1 id="insert-description-h1">Description</h1>
                            <textarea type="text"  className="inputDescription" id="insert-description" onKeyPress={(ev)=> validade(ev)} />
                        </div>


                        <div className="right">
                            <h1 id="insert-my-team-h1">Team website</h1>
                            <input type="text" placeholder="http://myteam.com" className="teamWeb" id="insert-my-team" onKeyDown={(ev)=> validade(ev) }/>
                            <TeamType>
                                <h1>Team type</h1>
                                <div className="roundCheckDiv">
                                        <RoundCheck type="radio" name="teamType" value="real" id="real" defaultChecked onClick={(ev)=>{selected(ev.currentTarget.id)}} /> <label id="label-real" className="selected" htmlFor="real">Real</label>
                                        <RoundCheck type="radio" name="teamType" value="fantasy" id="fantasy" onClick={(ev)=>{selected(ev.currentTarget.id)}} /> <label id="label-fantasy" htmlFor="fantasy">Fantasy</label>                            
                                </div>
                                <h1>Tags</h1>
                                <div className="tagsArea">
                                    <ul>
                                        {tags.map((tag, index)=>(
                                            <li key={index}>
                                                <span>{tag}</span>
                                                <FiX onClick={() => removeTags(index)} />
                                            </li>
                                        ))}
                                    </ul>
                                    <input 
                                        placeholder="Press enter or ; to add tags" 
                                        onKeyPress={handleAddTag} 
                                    />
                                </div>
                            </TeamType>
                        </div>
                    </div>

                    <strong className="strongSquad">CONFIGURE SQUAD</strong>
                    <div className="configureSquad">
                        <div className="left">
                                <strong>Formation</strong>
                                <select name="formation" id="">
                                    <option value="1">3 - 2 - 2 - 3</option>
                                    <option value="2">3 - 2 - 3 - 1</option>
                                    <option value="3">3 - 4 - 3</option>
                                    <option value="4">3 - 5 - 2</option>
                                    <option value="5">4 - 2 - 3 - 1</option>
                                    <option value="6">4 - 3 - 1 - 1</option>
                                    <option value="7">4 - 3 - 2</option>
                                    <option value="8">4 - 4 - 2</option>
                                    <option value="9">4 - 5 - 1</option>
                                    <option value="10">5 - 4 - 1</option>
                                </select>
                                <Field />

                                <Button type="submit">Save</Button>

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
                {/* </form> */}

            </Content>
            {/* <Footer /> */}
        </>
    )
}

export default Creating