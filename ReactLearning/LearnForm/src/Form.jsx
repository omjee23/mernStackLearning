import { useState } from "react";

export default function Form(){
    let [formData, setFormData] = useState({userName: "",fullname: "",email: "",password: ""});


    function handleMultlpleInput(event){
        let filed = event.target.name;
        let data = event.target.value;
        setFormData((currData)=>{
            return{...currData, [filed]: data}
        }); 
    }
    function handleSubmit(event){
        event.preventDefault()
        setFormData({userName: "",fullname: "",email: "",password: "" })
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">User Name</label>
            <input placeholder="User Name." onChange={handleMultlpleInput} value={formData.userName} type="text" id="userName" name="userName"/>
            <br/><br/><br/>
            <label htmlFor="fullName">Full Name</label>
            <input placeholder="Full Name" onChange={handleMultlpleInput} value={formData.fullname} type="text" id="fullName" name="fullname"/>
            <br/><br/><br/>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" onChange={handleMultlpleInput} value={formData.email} id="email" name="email" />
            <br/><br/><br/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" onChange={handleMultlpleInput} value={formData.password} id="password" name="password" />
            <br/><br/><br/>
            <button>Submit</button>
        </form>
        </>
    )
}