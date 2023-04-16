import React from "react";
import Comment from "./Comment";

const ListComment = (props) => {
  return (
    <>
      <div>
        {props.comments.map((comment) => {
          return (
            <div key={comment.id}>
              <Comment
                comment={comment}
                userId={props.userId}
                tutorialId={props.tutorialId}
              ></Comment>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListComment;
