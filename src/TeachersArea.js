import { useEffect, useState } from "react"
import axios from "axios"
export default function TeachersArea(){
    const [userResult,setUserResult] = useState([]);
    const getTeachersArea = async () =>{
        const response = await axios.get("https://anthropicapi-hrjw5cc7pa-uc.a.run.app/get_profile_for_teacher")
        let result = response.data
        console.log(result)
        setUserResult(result.result)
        //setUserResult(result.result)
    }

    useEffect(() =>{
        getTeachersArea()
    },[])
    return(
        <div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                <h1>Student Reports</h1>
                {userResult !== undefined && userResult.map((result) =>{
                    return(
                        <div style={{width:"800px"}}>
                        <p>Username: {result.username}</p>
                        <p>Question Sets: {result.question_set_title}</p>
                        <p dangerouslySetInnerHTML={{__html:result.message}}></p>
                        </div>

                    )
                })}

            </div>
        </div>
    )
}