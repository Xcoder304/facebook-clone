import React, { useState } from "react";

// components / Elmenets
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { ContextVal } from "../../../context/Context";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

// icons
import { IoMdClose } from "react-icons/io";

import "../../../styles/post/createpost.css";

const CreatePost = () => {
  const [{ user }, dispatch] = ContextVal();
  const navigate = useNavigate();
  const [userInputVal, setuserInputVal] = useState("");
  const [image, setimage] = useState(null);

  const GetTheImage = (e) => {
    if (e.target.files[0]) {
      setimage(e.target.files[0]);
    }
  };

  const UploadFile = () => {
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => {
        alert(err.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          addDoc(collection(db, "post"), {
            file: url,
            time: serverTimestamp(),
            username: user?.displayName,
            userprofile: user?.photoURL,
            caption: userInputVal,
          });
        });

        navigate("/");
      }
    );
  };

  return (
    <div className="createPost">
      <div className="createPost__wapper">
        <div className="wapper__top">
          <h3>create post</h3>
          <div className="wappper__closeBtn" onClick={() => navigate(-1)}>
            <IoMdClose className="icon" />
          </div>
        </div>

        <div className="wapper__userProfile">
          <Avatar alt="Remy Sharp" src={user?.photoURL}></Avatar>
          <h4>{user?.displayName}</h4>
        </div>

        <div className="wapper__input">
          <input
            type="text"
            placeholder={`What's on your mind, ${user?.displayName}?`}
            value={userInputVal}
            onChange={(e) => setuserInputVal(e.target.value)}
          />
        </div>

        <div className="wapper__buttons">
          <div className="wapper__button">
            <label htmlFor="file" className="photos__btn">
              upload photos
            </label>
            <input
              type="file"
              style={{ visibility: "hidden" }}
              id="file"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={GetTheImage}
            />
          </div>

          <div className="wapper__button">
            <label htmlFor="file2" className="video__btn">
              upload videos
            </label>
            <input
              type="file"
              style={{ visibility: "hidden" }}
              id="file2"
              accept="video/mp4,video/x-m4v,video/*"
            />
          </div>
        </div>

        <h3 style={{ padding: "0 3% 10px" }}>{image?.name}</h3>

        <div className="wapper__postBtn">
          <button onClick={UploadFile}>post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
