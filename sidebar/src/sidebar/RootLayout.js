import React, { useState } from 'react';
import "./rootlayout.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross2} from "react-icons/rx"
import {Link} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const RootLayout = ({children}) => {
    
   const [state,setstate] = useState(false)
    return (
        <div className='rootmain'>
            <div className="menu"> {state ? <RxCross2 onClick={()=>setstate(false)}/> : <GiHamburgerMenu onClick={()=>setstate(true)}/> }</div>
           <div className={state ? "rootbox1" : "rootbox"}>
            {children}
           </div>
           <div className={state ? "rootnav" : "rootnav1"}>
            <ul  data-aos="fade-left">
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link>Gallery</Link></li>
            </ul>
           </div>
        </div>
    );
}

export default RootLayout;
