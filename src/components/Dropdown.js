import React, { useState } from 'react'
import {Link} from "react-router-dom"

function Dropdown() {

    const [click, setClick] = useState(false)

    function handleClick() {
        setClick(click => !click)
    }

    return (
        <ul onClick={handleClick} 
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
        <li >
            <Link to="/strollers" onClick={() => setClick(false)}>
                Strollers
            </Link>
        </li>
        <li >
            <Link to="/carseats" onClick={() => setClick(false)}>
                Carseats
            </Link>
        </li>
            
        </ul>
    )
}

export default Dropdown
