import Question from "./Question"
import SpaceBG from "./space-bg.jpeg"
import { ToastContainer} from 'react-toastify';
import { useState } from "react";
export default function PlanetTwo (){
    const [hintsused,setHintsUsed] = useState(0)
    const [username,setUsername] = useState("");
    const [showusername,setShowUsername] = useState(true)
    const question_data = {
    "question_set_title":"Questions with Only Numbers and Symbols",
    "questions":[
        {
            "question": "7 + 9 = ?",
            "hint": "Think of 9 as almost 10. If you add 10 to 7, that's 17, right? Now, since 9 is 1 less than 10, just subtract 1 from 17 to find the answer.",
            "answer": "16"
        },
        {
            "question": "15 - 6 = ?",
            "hint": "Imagine you have 15 apples and give 6 of them away. Count how many apples you have left.",
            "answer": "9"
        },
        {
            "question": "4 x 8 = ?",
            "hint": "Think of it as adding 4 together 8 times. How many do you get?",
            "answer": "32"
        },
        {
            "question": "24 ÷ 3 = ?",
            "hint": "If you have 24 apples and want to share them equally among 3 friends, how many apples does each friend get?",
            "answer": "8"
        },
        {
            "question": "9 + 6 - 4 = ?",
            "hint": "First add the first two numbers, then subtract the last.",
            "answer": "11"
        },
        {
            "question": "5 x (2 + 3) = ?",
            "hint": "Solve inside the parentheses first.",
            "answer": "25"
        },
        {
            "question": "40 ÷ 5 x 2 = ?",
            "hint": "First divide, then multiply.",
            "answer": "16"
        },
        {
            "question": "(7 - 4) x 6 = ?",
            "hint": "Subtract first, then multiply.",
            "answer": "18"
        }
    ]

    }
    return (
        <div >
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1>Questions with Only Numbers and Symbols</h1>
            </div>
            <form onSubmit={(e) =>{e.preventDefault();setShowUsername(false)}}>
            {showusername === true && <input placeholder="Enter Name:" onChange={(e) =>{setUsername(e.target.value)}} value={username}></input>}
            </form>

            <div style={{display:"flex",flexDirection:"column"}}>
                {question_data.questions.map((question,ind) =>{
                    return(
                        <Question question_set_title={question_data.question_set_title} username={username} hintsused={hintsused} setHintsUsed={setHintsUsed} key={ind} index={ind} question={question.question} answer={question.answer} hint={question.hint} />
                    )

                })}
                

                 <ToastContainer />
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>


            </div>
            
        </div>
    )
}