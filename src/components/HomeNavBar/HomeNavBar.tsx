import React from "react";
import { Icon } from '@rsuite/icons';
import Brand from '../Brand';
import {FaHome} from "react-icons/fa";
import {ImBook} from "react-icons/im";
import {IoPersonSharp} from "react-icons/io5";
import { Link } from 'react-router-dom';


const HomeNavBar = props => {
    return (
        <div className="home-nav-bar">
            <div className="content">

                <Link to="/" style={{ textDecoration: 'none', color:'var(--black)' }}>
                <div className="logo-box">
                    <Brand style={{ display: 'flex', alignItems:'center', justifyContent:'center'}} height={30}/>
                    <div className="logo-name">TEXTBOOK</div>
                </div>
                </Link>

                <div className="options">

                    <Link to="/" style={{ textDecoration: 'none', color:'var(--black)' }}>
                    <div className="icon-container" style={{marginRight:"10px"}}>
                        <Icon as={FaHome} />
                        <div className="icon-text">HOME</div>
                    </div>
                    </Link>

                    <Link to="/browse" style={{ textDecoration: 'none', color:'var(--black)' }}>
                    <div className="icon-container">
                        <Icon as={ImBook} />
                        <div className="icon-text">BROWSE</div>
                    </div>
                    </Link>

                    <Link to="/" style={{ textDecoration: 'none', color:'var(--black)' }}>
                    <div className="icon-container">
                        <Icon as={IoPersonSharp} />
                        <div className="icon-text">PROFILE</div>
                    </div>
                    </Link>
                    
                </div>

            </div>




        </div>


    );
    
    
    
        
};

export default HomeNavBar;