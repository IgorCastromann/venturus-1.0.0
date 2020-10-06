import React, { useState, useEffect  } from 'react'

import { HeaderContent, BodyContent } from './styles'
// import axios from 'axios'


const Top5 = ()=>{
    const [infoTeams, setInfoTeams] = useState([
        {
            name: 'Inter Milan',
            avgAge: 31.9,
        },
        {
            name: 'Juventus',
            avgAge: 31.3,
        },
        {
            name: 'Barcelona',
            avgAge: 31.4,
        },
        {
            name: 'APOEL',
            avgAge: 31.7,
        },
        {
            name: 'AC Milan',
            avgAge: 31.6,
        },
        {
            name: 'Arsenal FC',
            avgAge: 21.1,
        },
        {
            name: 'Lazio',
            avgAge: 21.6,
        },
        {
            name: 'Real Madrid',
            avgAge: 22.1,
        },
        {
            name: 'Liverpool',
            avgAge: 22.2,
        },
        {
            name: 'Bayern',
            avgAge: 22.5,
        },
    ])

    const [fiveHighest, setFiveHighest] = useState([])
    const [fiveLowest, setFiveLowest] = useState([])

    useEffect(()=>{
        const sortedTeams = infoTeams.sort((a, b) => (a.avgAge > b.avgAge) ? -1 : 1);
        const top5 = sortedTeams.slice(0, 5);
        const least5 = sortedTeams.slice(-5);

        setFiveHighest([...top5])
        setFiveLowest([...least5])

    },[infoTeams])


    function styleFn(element) {

        if(element.className !== 'selected'){
            return element.className = 'selected'
        }else{
            return element.className = 'notSelected'
        }

      }
    return(
        <>
            <HeaderContent>
                <h1>Top 5</h1>   
            </HeaderContent>

            <BodyContent>
                <div>  
                    <strong>Highest avg age</strong>
                    <ul>
                        {fiveHighest.map(team=> 
                            (
                            <li key={team.name} onClick={(ev)=> styleFn(ev.currentTarget)} >
                                <h1>{team.name}</h1>
                                <h2>{team.avgAge}</h2>
                            </li>
                        ))}
                    </ul>

                </div>
                <div>  
                    <strong>Lowest avg age</strong>
                    <ul>
                        {fiveLowest.map(team =>(
                            <li key={team.name} onClick={(ev)=> styleFn(ev.currentTarget)} >
                                <h1>{team.name}</h1>
                                <h2>{team.avgAge}</h2>
                            </li>
                        ))}
                    </ul>
                </div>
            </BodyContent>
        </>
    )
}

export default Top5