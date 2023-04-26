import React, {useState} from "react";
import bookicon from "../../../public/bookicon.svg";
import { useNavigate } from "react-router-dom";



const TextbookIcon = props => {
    const navigate = useNavigate();
    const[darkness,setDarkness]=useState('light');

    function goToTextbook() {
        navigate(`/contents`);
    }

   

    return (
        <div className="book-container">
            <div className="clicking">

            <div onClick={goToTextbook} className="backdrop">
                <img src={bookicon} alt="bookicon" className='book-img'/>
            </div>
            

        <div className="title">Introduction to the Design and Analysis of Algorithms</div>
                
                
            
        </div>
        </div>
            

            
        

    );
    
        
};

export default TextbookIcon;