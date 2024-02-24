import { useState } from 'react';
import {toast } from 'react-toastify';
import axios from "axios"
export default function Question({question_set_title,username,index,question,answer,hint,setHintsUsed,hintsused}){
    const [useranswer,setUserAnswer] = useState("");
    const [showinput,setShowInput] = useState(true)
    const showHint = () =>{
        toast(hint);
        setHintsUsed(hintsused + 1);
    }
    const [numAttempts,setNumAttempts] = useState(0);
    const handleSubmit = async () =>{
        if (username !== ""){
        if (useranswer === answer){
            setShowInput(false)
            let json = {"username":username,"question_set_title":question_set_title,"question":question,
            "useranswered":useranswer,"answer":answer,"numofattempts":numAttempts,"hintsused":hintsused}
            const response = await axios.post(`https://anthropicapi-hrjw5cc7pa-uc.a.run.app/storequestion`,json)
            let result = response.data
            if (result.error !== undefined){
                toast(result.error)
            }
            else{
                toast("Correct answer.")
            }
        }
        else{
            toast("Incorrect Answer.")
            setNumAttempts(numAttempts +1)
        }
    }
    else{
        toast("Enter Username")
    }
    }

    return (
        <div style={{marginTop:"30px"}}>
            <div style={{display:"flex",gap:"30px"}}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"50%",height:"700px",backgroundColor:"grey",borderRadius:"5px"}}>
            <div style={{display:"flex",width:"700px",height:"500px",backgroundColor:"white",flexDirection:"column",padding:"40px"}}>
                <h1 style={{fontSize:"75px"}}>
                    Question {index + 1}

                </h1>
                <p style={{fontSize:"50px"}}>
                    {question}
                </p>
                {showinput === true &&
                <div style={{display:"flex",gap:"5px"}}>
                                    <input onChange={(e) =>{setUserAnswer(e.target.value)}} placeholder='Enter Answer'></input>
                <button onClick={() =>{handleSubmit()}}>Submit</button>
                <button onClick={() =>{showHint()}} style={{width:"100px",marginLeft:"auto"}}>Hint</button></div>}


            </div>

            </div>
            <div style={{width:"50%",height:"700px",backgroundColor:"grey",borderRadius:"5px"}}>

            </div>

            </div>
        </div>
    )

}