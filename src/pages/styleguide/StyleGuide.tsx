import React, { useState } from 'react'
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import gif from "@/media/animations/ListSort.gif";
import { Icon } from '@rsuite/icons';
import {AiOutlineEye, AiOutlineRead} from "react-icons/ai";
// @ts-ignore
import mergesort from "@/media/animations/mergesort.png";
import { MDXProvider } from "@mdx-js/react";
import MockCodeTerminal from '@/components/MockCodeTerminal.mdx';


export const StyleGuide = observer(() => {
    const navigate = useNavigate();
    const [view, setView] = React.useState('eye');

    function goToContents() {
        navigate(`/contents`);
    }

    function setEye() {
        setView('eye');
    }
    function setBook() {
        setView('book');
    }

    return(
       <div className='textbook-page-container'>
        <div className="chapter-title">Here is the Chapter Name</div>
        <div className="estimated-time">Estimated Completion: 5-10 minutes</div>
        <div className='textbook-text'>
            <div> At the top of the page is some kind of introduction... 
                Python lists are one of the most versatile and widely used data structures 
                in the Python programming language. A list is an <b>ordered collection of elements</b>, 
                which can be of any data type, such as integers, strings, or even other lists.
            </div>
            <div className='textbook-header'>List Sorting Algorithms</div>
            <div className='textbook-text'>Suppose we have an unsorted list, and we want to sort them in ascending order.</div>
        </div>
        

        
        <div className='visualization'>
            <div className='view'>
                { view === 'eye' ?
                    <Icon as={AiOutlineEye} className='view-icon' onClick={setBook}></Icon>
                :
                    <Icon as={AiOutlineRead} className='view-icon' onClick={setEye}></Icon>
                }
                
            </div>

            {view === 'eye' ?
                <img src={gif} alt="loading..." className='gif'/>
            :
                <div className='textbook-text' style={{paddingRight:'50px'}}>
                    <div> An unsorted list is a collection of items in no particular order, 
                    meaning that the items are randomly arranged. For example, 
                    <em> [5, 2, 8, 1, 9] </em> is an unsorted list. A sorted list, on the 
                    other hand, is a collection of items arranged in a particular 
                    order, such as ascending or descending order. For example, 
                    <em> [1, 2, 5, 8, 9] </em> is a sorted list.</div>
                </div>
            }
        </div>
        <div className='textbook-text'>What algorithms can we use to sort a list?</div>

        <div className='textbook-header'>Merge Sort</div>
        <div className='textbook-text'></div>
        {view === 'eye' ?
                <img src={mergesort} alt="loading..." className='pic'/>
            :
                <div className='textbook-text' style={{paddingRight:'50px'}}>
                    Merge sort is a divide-and-conquer algorithm that sorts a 
                    list by breaking it down into smaller sub-lists, sorting 
                    those sub-lists recursively, and then merging them back 
                    together into a sorted list. The algorithm works by 
                    repeatedly dividing the list in half until the sub-lists 
                    are trivially sorted (i.e., they contain only one element),
                     then merging the sub-lists in a sorted order using a 
                     "merge" subroutine. Merge sort has a worst-case time 
                     complexity of O(n*log(n)) and is considered one of the 
                     most efficient general-purpose sorting algorithms.
                </div>
            }

                
        <div className='textbook-header'>Try it Yourself!</div>

        <div className='textbook-text'>Exercise instructions are listed here.</div>
        <div style={{marginTop:'10px'}}>
        <MDXProvider>
            <MockCodeTerminal></MockCodeTerminal>
        </MDXProvider>
        </div>

        <div className='textbook-header'>Check Your Understanding</div>

        <div>parsons problems</div>


        </div>



    );
})