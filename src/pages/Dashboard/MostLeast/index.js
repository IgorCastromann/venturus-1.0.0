import React from 'react'


import { Content } from './styles'
import imgMost from '../../../assets/playerImg.png'
import imgLeast from '../../../assets/player2.png'

const MostLeast = () =>{
    return(
        <Content>
            <div className="left">
                <h1>Most picked player</h1>  
                <div className="image">
                    <img src={imgMost} alt="player X" width={80} height={80} />
                    <div>
                        <p>75%</p> 
                    </div>
                </div>
            </div>

            <div className="right">
                <h1>Most picked player</h1>  
                <div className="image">
                    <img src={imgLeast} alt="player X" width={80} height={80} />
                    <div>
                        <p>25%</p> 
                    </div>
                </div>
            </div>
        </Content>
    )
}

export default MostLeast