import React from 'react'
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";


export const Highlights = observer(() => {
    const navigate = useNavigate();

    function goToContents() {
        navigate(`/contents`);
    }

    return(
        <div className='highlights-container'>
            <div> HI ALICE! </div>
        </div>
       


    );
})