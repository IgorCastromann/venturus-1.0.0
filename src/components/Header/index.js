import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/venturus.png'
import logoImgIc from '../../assets/ic.png'

import { Header as HeaderStyle } from './styles'

const Header = () =>{
    return(
        <HeaderStyle>
        <div className="leftHeader">
            <Link to="/">
                <img src={logoImg} alt="venturus"  width={50} height={50} />
            </Link>
                <strong>Squad Management Tool</strong>
        </div>

        <div className="rightHeader">
            <h2>Igor Castro</h2>
            <img src={logoImgIc} alt="Initials"/>
        </div>
        </HeaderStyle>
    )
}

export default Header