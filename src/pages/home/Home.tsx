import React from 'react'
import {observer} from "mobx-react-lite";
import HomeNavBar from '@/components/HomeNavBar/HomeNavBar';


export const Home = observer(() => {

    return(
        <div>
            <HomeNavBar></HomeNavBar>



        </div>


    );
})