import React from 'react';
import listImg from '../list.png'
import gridImg from '../grid.svg'
import refreshImg from '../Refresh.png'

const Header = (props) => {
    return (
        <header>
            <span className="App-title">Bit Persons</span>
            <img src={props.selected ? gridImg : listImg} className="button" alt='button' onClick={props.handler} />
            <img src={refreshImg} className="button" alt='button' onClick={props.refresher} />
            <a className="about" onClick={props.aboutButton}>About</a>
        </header>

    )
}

export default Header;