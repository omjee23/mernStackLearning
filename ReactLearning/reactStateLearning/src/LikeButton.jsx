import { useState } from "react";

function LikeButton(){
    const [like , setLike] = useState(false);
    function toggleBtn(){
        setLike(!like)
        console.log("Toggle button") 
    };
    let likeStyle = {color: 'red'};
    return(
        <>
        <p onClick={toggleBtn}>
            {
                like ? <i className="fa-solid fa-heart" style={likeStyle}></i> : <i className="fa-regular fa-heart"></i>
            }
        </p>
        </>
    )
}

export default LikeButton;