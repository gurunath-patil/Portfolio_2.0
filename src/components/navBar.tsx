import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./component-style.css"

export default function NavBar(){
    // const urlPath = window.location.pathname;
    const linkContainer = useRef(null);
    let location = useLocation();
    const [urlValue,setUrlValue] = useState('');
    useEffect(()=>{
        try{
            let divChild = linkContainer.current.childNodes            
            for(let item of divChild){
                item.classList.remove('text-yellow-400')
            }

            switch(location.pathname){
                case "/about":
                    divChild[0].classList.add('text-yellow-400');
                    break;
                case "/resume":
                    divChild[1].classList.add('text-yellow-400');
                    break;
                case "/portfolio":
                    divChild[2].classList.add('text-yellow-400');
                    break;
                case "/contact":
                    divChild[3].classList.add('text-yellow-400');
                    break;
                default:
                    console.log("someting went wrong!");
            }
        }catch(err){
            console.log(err);
        }
    },[location.pathname])

    return(
        <div ref={linkContainer} id="nav-bar-container" className="rounded-bl-xl rounded-br-xl md:rounded-br-none">
            <Link to="about" className="text-lg text-white hover:text-yellow-400 hover:font-semibold">About</Link>
            <Link to="resume" className="text-lg text-white hover:text-yellow-400 hover:font-semibold">Resume</Link>
            <Link to="portfolio" className="text-lg text-white hover:text-yellow-400 hover:font-semibold">Portfolio</Link>
            <Link to="contact" className="text-lg text-white hover:text-yellow-400 hover:font-semibold">Contact</Link>
        </div>
    )
}