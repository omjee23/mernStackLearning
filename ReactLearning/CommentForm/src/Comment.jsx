import { useState } from "react"

export default function CommentForm({addNewComment}){
    let [formData, setFormData] = useState({userName: "", remarks: "", rating: 5});

    function handleInputChange(event) {
        setFormData((currData)=>{
            return{
                ...currData, [event.target.name]: event.target.value
            }
        })
        
    }

    function handleSubmitForm(event){
        event.preventDefault();
        addNewComment(formData)
        setFormData({userName: "", remarks: "", rating: 5})
        console.log(formData);
        
    }

    return(
        <>
        <div>
            <h4>Comment Form</h4>
            <form onSubmit={handleSubmitForm}>
                <br></br>
                <label htmlFor="userName">User Name : </label>
                <input type="text" id="userName" placeholder="enter userName ... " value={formData.userName} onChange={handleInputChange} name="userName"/>
                <br></br><br></br><br></br>
                <label htmlFor="remarks">Remarks: </label>
                <textarea id="remarks" placeholder="write your comment here... " value={formData.remarks} onChange={handleInputChange} name="remarks"></textarea>
                <br></br><br></br><br></br>
                <label htmlFor="rating">Rating: </label>
                <input type="number" id="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange}name="rating"/>
                <br></br><br></br><br></br>
                <button>Add a comment</button>
                <br></br><br></br><br></br>
            </form>
        </div>
        </>
    )
}