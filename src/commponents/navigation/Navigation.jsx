import React, {useEffect, useState} from 'react';

import './style/navigation_style.css';
import menu from '../../images/menu.png';
import closeIcon from '../../images/close.png';

import { Link } from 'react-router-dom';

export default function Navigation() {
  const [toggle, setToggle] = useState(false)

  const hideNavigation = () => {
    setTimeout(() => {
        setToggle(false)
    }, 7000)
  }
  useEffect(() => {
    hideNavigation()
  }, [toggle])
  return (
    <div className='nav_container w-full h-16 flex justify-center'>
        <nav className='wrapper h-16 flex justify-between items-center relative'>
            <div className='logo'>
                <a><b>Bee4Invest</b>.com</a>
            </div>

            <div className='links'>
                <ul className={(toggle === true) ? 
                    'flex flex-col xl:flex-row absolute xl:static top-20 xl:top-0 right-0 w-full h-55 rounded-md ' : 
                    'hidden xl:flex flex-col xl:flex-row fixed xl:static'}
                >
                    <li className='nav'><Link to="/"><b>Home</b></Link></li>
                    <li className='nav'><Link to="/Market"><b>Market</b></Link></li>
                    <li className='nav'><a href="!#"><b>Acedemy</b></a></li>
                    <li className='nav'><Link to="/Tools"><b>Tools</b></Link></li>
                    <li className='nav'><Link to="/News"><b>News</b></Link></li>
                </ul>
            </div>

            <div className='hamburger'>
                <button className='btn h-10 rounded-full hidden xl:flex justify-center items-center'>Login</button>
                <div className='flex items-center justify-center xl:hidden' onClick={() => setToggle(!toggle)}>
                    {(toggle === false) ? <img src={menu} alt='menu icon; format: png;'/>
                    : <img src={closeIcon} alt='close icon; format: png;'/>
                    }
                </div>
            </div>
        </nav>
    </div>
  )
}
