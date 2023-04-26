import React from 'react'
import {observer} from "mobx-react-lite";
import HomeNavBar from '@/components/HomeNavBar/HomeNavBar';
import { useNavigate } from "react-router-dom";
import SearchBar from '@/components/SearchBar/SearchBar';
import TextbookIcon from '@/components/TextbookIcon';



export const Browse = observer(() => {
    const navigate = useNavigate();

    function goToContents() {
        navigate(`/contents`);
    }

    return(
       <div>
        <HomeNavBar></HomeNavBar>

        <div className='browse-container'>
        <div className='browse-heading'>
            Browse our 0+ Textbook Offerings!
        </div>
        <SearchBar></SearchBar>
        <TextbookIcon></TextbookIcon>
       </div>
       </div>


    );
})