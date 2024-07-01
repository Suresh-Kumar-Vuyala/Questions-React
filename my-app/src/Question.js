import React from 'react';
import {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';








const Question=(props)=>{
    const[btn,setButton]=useState(false);

    const changeBtn=(btn)=>{
          if(btn){
            setButton(false)
          }
          else{
            setButton(true)
          }
    }
    return(
        <>
        <section className="question-container">
        <h4 className="part-1">{props.data.title} {<br></br>}
        {btn &&  <p>{props.data.info}</p>}
        </h4>
        <button onClick={()=>{changeBtn(btn)}}>{(!btn)? <AiOutlinePlus/>: <AiOutlineMinus/>}
       
        </button>

        </section>
        
        
        
        </>
    )
}


export default  Question;