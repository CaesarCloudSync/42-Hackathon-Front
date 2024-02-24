import Question from "./Question"
import SpaceBG from "./space-bg.jpeg"
import { ToastContainer} from 'react-toastify';
import { useState } from "react";
export default function PlanetOne (){
    const [hintsused,setHintsUsed] = useState(0)
    const [username,setUsername] = useState("");
    const [showusername,setShowUsername] = useState(true)
    const question_data = {
    "question_set_title":"Questions with Only Words",
    "questions":[
    {
        "question": "What is the sum of twelve and eight?",
        "hint": "Sum means addition.",
        "answer": "20"
    },
    {
        "question": "Subtract nine from seventeen.",
        "hint": "Subtract means take away.",
        "answer": "8"
    },
    {
        "question": "How many groups of four are in twenty?",
        "hint": "Think of division.",
        "answer": "5"
    },
    {
        "question": "If you double ten, what do you get?",
        "hint": "Double means multiply by two.",
        "answer": "20"
    },
    {
        "question": "What is the product of five and six?",
        "hint": "Product means the result of multiplication.",
        "answer": "30"
    },
    {
        "question": "Divide thirty by five.",
        "hint": "Think of how many fives fit into thirty.",
        "answer": "6"
    },
    {
        "question": "If you have fifteen apples and give away six, how many do you have left?",
        "hint": "This is subtraction.",
        "answer": "9"
    },
    {
        "question": "How many weeks are in sixty-three days?",
        "hint": "Each week has seven days.",
        "answer": "9"
    },
    {
        "question": "If each box contains 4 toys and you buy 3 boxes, how many toys do you have?",
        "hint": "Multiply the number of boxes by the number of toys in each.",
        "answer": "12"
    },
    {
        "question": "A cake is divided into 8 equal pieces. If you eat 2 pieces, what fraction of the cake is left?",
        "hint": "Think of the pieces as parts of a whole.",
        "answer": "3/4"
    },
    {
        "question": "You have 2 dozen eggs. After making breakfast, you have 16 eggs left. How many did you use?",
        "hint": "Remember, a dozen equals 12.",
        "answer": "8"
    },
    {
        "question": "If a train travels 60 miles in 1 hour, how far will it travel in 4 hours?",
        "hint": "Multiply the speed by the number of hours.",
        "answer": "240"
    },
    {
        "question": "You read 5 pages of a book each day. How many pages will you read in a week?",
        "hint": "Multiply the pages per day by the number of days in a week.",
        "answer": "35"
    },
    {
        "question": "There are 3 bags with 7 marbles in each. How many marbles are there in total?",
        "hint": "Multiply the number of bags by the number of marbles per bag.",
        "answer": "21"
    },
    {
        "question": "If you save $5 each week, how much will you have saved in 4 weeks?",
        "hint": "Multiply the amount saved per week by the number of weeks.",
        "answer": "$20"
    },
    {
        "question": "A rectangle has a length of 8 cm and a width of 4 cm. What is its area?",
        "hint": "Multiply length by width to find the area.",
        "answer": "32 cm²"
    },
    {
        "question": "What is the perimeter of a square garden if one side is 5 meters long?",
        "hint": "The perimeter is the total distance around the garden.",
        "answer": "20 meters"
    },
    {
        "question": "If you have two quarters, three dimes, and four pennies, how much money do you have?",
        "hint": "Add up the value of each coin type.",
        "answer": "84 cents"
    },
    {
        "question": "How many edges does a cube have?",
        "hint": "Count the lines where two faces meet.",
        "answer": "12"
    },
    {
        "question": "If a year has 12 months, how many months are in half a year?",
        "hint": "Divide the total number of months by 2.",
        "answer": "6"
    },
    {
        "question": "What is the next number in the pattern: 2, 4, 6, 8, ?",
        "hint": "Look for the pattern in the sequence.",
        "answer": "10"
    },
    {
        "question": "If today is Tuesday, what day will it be in 3 days?",
        "hint": "Count the days starting with today.",
        "answer": "Friday"
    },
    {
        "question": "How many hours are in three days?",
        "hint": "Multiply the number of hours in a day by the number of days.",
        "answer": "72"
    },
    {
        "question": "If you have a quarter, a dime, and a nickel, how much more do you need to have a dollar?",
        "hint": "Subtract the total amount you have from a dollar.",
        "answer": "60 cents"
    }
]

    }
    return (
        <div >
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1>Questions with Only Words</h1>
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