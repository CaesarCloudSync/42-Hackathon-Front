import { useState } from "react"
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
export default function ParentsArea(){
    const [email,setEmail] = useState("");
    const [childname,setChildName] = useState("");
    const [message,setMessage] = useState("")
    const [loading,setLoading] = useState(false)
    const handleSubmit = async () =>{
        setLoading(true)
        const response = await axios.get(`https://anthropicapi-hrjw5cc7pa-uc.a.run.app/create_profile_for_parent?email=${email}&username=${childname}`)
        let result = response.data
        setMessage(result.message)
        setLoading(false)

    }
    return(
    <div>
        <input onChange={(e) =>{setEmail(e.target.value)}} placeholder="Email:"></input>
        <input onChange={(e) =>{setChildName(e.target.value)}} placeholder="Child Name:"></input>
        <button onClick={() =>{handleSubmit()}}>Submit</button>
        {loading === true && <LoadingSpinner/>}

    </div>)
}