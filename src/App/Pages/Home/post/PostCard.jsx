import React, { useState, useEffect } from "react";

// components/ Elements
import Avatar from "@mui/material/Avatar";
import CommentsSec from "./CommentsSec";
import { db } from "../../../firebase/config";
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { ContextVal } from "../../../context/Context";

// styles
import "../../../styles/post/postcard.css";

// icons
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BiShare } from "react-icons/bi";
import { AiTwotoneLike } from "react-icons/ai";

const PostCard = ({ id, file, time, username, userprofile, caption, type }) => {
  const [OpenComments, setOpenComments] = useState(false);
  const [{ user }, dispatch] = ContextVal();

  const [Likes, setLikes] = useState([]);
  const [Totalcomments, setTotalcoments] = useState([]);
  const [hasLiked, sethasLiked] = useState(false);
  const [isFileImage, setFileImage] = useState(false);
  const [isFileVideo, setFileVideo] = useState(false);

  // getting all the likes
  useEffect(() => {
    const collectionRef = collection(db, "post", id, "likes");
    const q = query(collectionRef);
    const display = onSnapshot(q, (snapshot) => {
      setLikes(snapshot.docs.map((data) => data));
    });
  }, [db]);

  // this fucntion will check if i liked or not
  useEffect(() => {
    sethasLiked(Likes.findIndex((like) => like?.id === user?.uid) != -1);
  });

  // if you liked the post it will delete that if you dont like it. it will add your like
  const LikeTheVideo = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "post", id, "likes", user?.uid));
    } else {
      await setDoc(doc(db, "post", id, "likes", user?.uid), {
        username: user?.displayName,
      });
    }
  };

  // getting the total comments length
  useEffect(() => {
    onSnapshot(query(collection(db, "post", id, "comments")), (snapshot) => {
      setTotalcoments(snapshot.docs);
    });
  }, [db]);

  return (
    <div className="postcard">
      {/* header */}
      <div className="postcard__top">
        <div className="postcard__top-left">
          <div className="userProfile">
            <Avatar alt={username} src={userprofile}></Avatar>
            <div className="userInfo">
              <h4>{username}</h4>
              <span>{new Date(time?.toDate()).toUTCString()}</span>
            </div>
          </div>
        </div>

        <div className="postcard__top-right">
          <HiDotsHorizontal className="icon" />
        </div>

        <div className="postcard__caption">
          <p>{caption}</p>
        </div>
      </div>

      {/* body */}
      <div className="postcard__file">
        {/* <img src={file} /> */}
        {type == "image" ? <img src={file} /> : <video src={file} controls />}
      </div>

      {/* footer */}

      <div className="postcard__footer">
        <div className="footer__status">
          <div className="footer__status-like">
            <span>
              <h5>{Likes.length}</h5> Likes
            </span>
          </div>

          <div
            className="footer__status-comments"
            onClick={() => setOpenComments(!OpenComments)}
          >
            <span>
              <h5>{Totalcomments.length}</h5> comments
            </span>
          </div>
        </div>

        {/* buttons */}
        <div className="footer__buttons">
          <div className="button" onClick={LikeTheVideo}>
            {hasLiked ? (
              <AiTwotoneLike className="icon liked" />
            ) : (
              <AiOutlineLike className="icon" />
            )}
            <span>like</span>
          </div>

          <div
            className="button"
            onClick={() => setOpenComments(!OpenComments)}
          >
            <GoComment className="icon" />
            <span>comment</span>
          </div>

          <div className="button">
            <BiShare className="icon" />
            <span>share</span>
          </div>
        </div>
      </div>

      {/* comments Section */}
      {OpenComments && <CommentsSec id={id} />}
    </div>
  );
};

export default PostCard;
