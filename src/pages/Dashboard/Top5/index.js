import React from 'react'

import { HeaderContent, BodyContent } from './styles'


const Top5 = ()=>{
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
                        <li onClick={(ev)=> styleFn(ev.currentTarget)} >
                            <h1>Inter Milan</h1>
                            <h2>31.9</h2>
                        </li>
                        <li onClick={(ev)=> styleFn(ev.currentTarget)} >
                            <h1>APOEL</h1>
                            <h2>31.7</h2>
                        </li>
                        <li onClick={(ev)=> styleFn(ev.currentTarget)}>
                            <h1>AC Milan</h1>
                            <h2>31.6</h2>
                        </li>
                        <li onClick={(ev)=> styleFn(ev.currentTarget)} >
                            <h1>Barcelona</h1>
                            <h2>31.4</h2>
                        </li>
                        <li onClick={(ev)=> styleFn(ev.currentTarget)} >
                            <h1>Juventus</h1>
                            <h2>31.3</h2>
                        </li>
                    </ul>

                </div>
                <div>  
                    <strong>Lowest avg agr</strong>
                    <ul>
                        <li onClick={(ev)=> styleFn(ev.currentTarget)} >
                            <h1>Arsenal FC</h1>
                            <h2>21.1</h2>
                        </li>
                        <li onClick={(ev)=> styleFn(ev.currentTarget)} >
                            <h1>Lazio</h1>
                            <h2>21.6</h2>
                        </li>
                        <li onClick={(ev)=> styleFn(ev.currentTarget)} >
                            <h1>Real Madrid</h1>
                            <h2>22.0</h2>
                        </li>
                        <li onClick={(ev)=> styleFn(ev.currentTarget)} >
                            <h1>Liverpool</h1>
                            <h2>22.1</h2>
                        </li>
                        <li onClick={(ev)=> styleFn(ev.currentTarget)} >
                            <h1>Bayern</h1>
                            <h2>22.5</h2>
                        </li>
                    </ul>

                </div>
            </BodyContent>
        </>
    )
}

export default Top5