import React from 'react'
import {observer} from "mobx-react-lite";
import HomeNavBar from '@/components/HomeNavBar/HomeNavBar';
import {Progress} from 'rsuite';
import { useNavigate } from "react-router-dom";
import { Document, Page } from 'react-pdf';


export const Home = observer(() => {
    const navigate = useNavigate();

    function goToContents() {
        navigate(`/contents`);
    }

    return(
        <div className='need-font'>

            <HomeNavBar></HomeNavBar>

            <div className='container'>

                <div className='welcome'>
                    Welcome, Annie!
                </div>

                <div className='main-content'>
                    <div className='status'>
                        <Progress.Circle className='progress-circle' trailColor='var(--dark-gray)' strokeWidth={10} strokeColor={"var(--blue)"} percent={70} showInfo={true} />
                        <div className='status-text'>
                            <div className='status-header'>You are 70% done with your assignment due this Friday.</div>
                            <div>You're doing great so far! Keep it up!</div>
                            <div className='button' onClick={goToContents}>Jump Back In</div>
                        </div>
                    </div>

                    <div className='game'>
                        <div className='game-text'>
                            <h2 style={{fontWeight:"700", fontSize:"16px"}}>Daily Challenge:</h2>
                            <p style={{fontWeight:"400", fontSize:"16px", marginLeft:"10px"}}>Nine Nine Plus</p>
                        </div>
                        

                       
                    </div>


                </div>




            </div>



        </div>


    );
})