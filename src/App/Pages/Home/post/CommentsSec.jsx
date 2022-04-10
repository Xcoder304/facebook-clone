import { useState, useEffect } from "react";

import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { ContextVal } from "../../../context/Context";
import { db } from "../../../firebase/config";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import "../../../styles/post/comments.css";

const CommentsSec = ({ id }) => {
  const [{ user }, dispatch] = ContextVal();
  const [comments, setcomments] = useState([]);
  const [userCommentVal, setuserCommentVal] = useState("");

  useEffect(() => {
    const collectionRef = collection(db, "post", id, "comments");
    const q = query(collectionRef, orderBy("time", "desc"));
    const display = onSnapshot(q, (snapshot) => {
      setcomments(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  const AddComment = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "post", id, "comments"), {
      text: userCommentVal,
      time: serverTimestamp(),
      username: user?.displayName,
      userprofile: user?.photoURL,
    });
    setuserCommentVal("");
  };

  return (
    <div className="comments">
      <div className="add__comment">
        <form onSubmit={AddComment}>
          <Avatar
            alt="Remy Sharp"
            src={user.photoURL}
            className="userProfile"
          ></Avatar>
          <input
            type="text"
            placeholder="Write a comment..."
            value={userCommentVal}
            onChange={(e) => setuserCommentVal(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            size="small"
            className="add__comment-btn"
          >
            Post
          </Button>
        </form>
      </div>

      {comments.map(({ id, data: { text, username, userprofile } }) => {
        return (
          <Comment
            key={id}
            text={text}
            userName={username}
            userProfile={userprofile}
          />
        );
      })}
    </div>
  );
};

const Comment = ({ text, userName, userProfile }) => {
  return (
    <div className="comments__comment">
      <Avatar alt={userName} src={userProfile}></Avatar>
      <div className="comment__text">
        <h4>{userName}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentsSec;
