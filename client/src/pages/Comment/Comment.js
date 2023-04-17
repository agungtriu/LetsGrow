/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { imageUrl } from "../../config/config";
import { getUserById } from "../../axios/userAxios";
import { AiFillDelete } from "react-icons/ai";
import { deleteComment } from "../../axios/commentAxios";
import { timeSince } from "../../helpers/timeSince";

const Comment = (props) => {
  const [data, setData] = useState({
    username: "",
    avatar: "",
  });
  const getProfile = () => {
    const id = props.comment.userId;
    getUserById(id, (result) => {
      setData({
        username: result.username,
        avatar: result.profile.avatar,
      });
    });
  };

  const navigation = useNavigate();
  const deleteHandler = (id) => {
    deleteComment(id, (status) => {
      if (status) {
        navigation("/tutorials/detail/" + props.tutorialId);
      }
    });
  };
  const location = useLocation();
  useEffect(() => {
    getProfile();
  }, [location.key]);

  return (
    <div className="d-flex align-items-start position-relative">
      <img
        className="avatar-mini rounded-circle"
        src={imageUrl + data.avatar}
        // style={{ width: "5%", borderRadius: "50%" }}
        alt={data.avatar}
      />
      <div className="ms-3">
        <h6 className="mt-2">
          {data.username} ·{" "}
          <span>{timeSince(props.comment.updatedAt)} ago</span>
        </h6>
        <p>{props.comment.text}</p>
      </div>
      {data.username === localStorage.username ? (
        <span className="position-absolute top-0 end-0">
          <Link className="link-danger" onClick={() => deleteHandler(+props.comment.id)}>
            <AiFillDelete />
          </Link>
        </span>
      ) : null}
    </div>
  );
};

export default Comment;
