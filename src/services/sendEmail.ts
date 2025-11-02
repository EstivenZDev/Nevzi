import axios from "axios"

export const sendEmail = async () =>{
    const res = await axios.post("/api/sendEmail")
    
}