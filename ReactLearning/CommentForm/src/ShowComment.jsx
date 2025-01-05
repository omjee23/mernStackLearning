import CommentForm from "./Comment.jsx";
import { useState } from "react";

export default function Comment() {
  let [commentData, setCommentData] = useState([
    { userName: "@om", remarks: "it's very Good", rating: 5 },
  ]);

  let addNewComment = (comment) => {
    setCommentData((currData) => {
      return [...currData, comment];
    });
  };

  return (
    <>
      <div>
        <div>
          {commentData.map((newComment , index) => {
            return (
              <div key={index}>
                <h3>{newComment.userName}</h3>
                <p>{newComment.remarks}</p>
                <span>{newComment.rating}</span>
              </div>
            );
          })}
        </div>
        <CommentForm addNewComment={addNewComment} />
      </div>
    </>
  );
}
