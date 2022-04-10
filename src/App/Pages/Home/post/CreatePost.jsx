import React, { useEffect, useState } from "react";

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
  const [{ user, FileType }, dispatch] = ContextVal();
  const navigate = useNavigate();
  const [userInputVal, setuserInputVal] = useState("");
  const [file, setfile] = useState(null);
  const [CurrentFileType, setCurrentFileType] = useState(null);

  const GetTheFile = (e) => {
    if (e.target.files[0]) {
      setfile(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (file) {
      if (
        file.type == "image/png" ||
        file.type == "image/jpeg" ||
        file.type == "image/jpg" ||
        file.type == "image/gif"
      ) {
        dispatch({
          type: "CHANGE__FILE__TYPE",
          FileType: "image",
        });
        setCurrentFileType("image");
      }
      if (file.type == "video/mp4") {
        dispatch({
          type: "CHANGE__FILE__TYPE",
          FileType: "video",
        });
        setCurrentFileType("video");
      }
    }
  }, [file]);

  const UploadImages = () => {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadImageTask = uploadBytesResumable(storageRef, file);
    uploadImageTask.on(
      "state_changed",
      (snapshot) => {
        console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => {
        alert(err.message);
      },
      () => {
        getDownloadURL(uploadImageTask.snapshot.ref).then((url) => {
          addDoc(collection(db, "post"), {
            file: url,
            time: serverTimestamp(),
            username: user?.displayName,
            userprofile: user?.photoURL,
            caption: userInputVal,
            type: FileType,
          });
        });
        navigate("/");
      }
    );
  };

  const UploadVideos = () => {
    const storageRef = ref(storage, `videos/${file.name}`);
    const uploadVideoTask = uploadBytesResumable(storageRef, file);
    uploadVideoTask.on(
      "state_changed",
      (snapshot) => {
        console.log((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => {
        alert(err.message);
      },
      () => {
        getDownloadURL(uploadVideoTask.snapshot.ref).then((url) => {
          addDoc(collection(db, "post"), {
            file: url,
            time: serverTimestamp(),
            username: user?.displayName,
            userprofile: user?.photoURL,
            caption: userInputVal,
            type: FileType,
          });
        });
        navigate("/");
      }
    );
  };

  console.log(file?.type);

  const UploadFile = () => {
    if (CurrentFileType == "image") {
      UploadImages();
    }
    if (CurrentFileType == "video") {
      UploadVideos();
    }
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
              upload files
            </label>
            <input
              type="file"
              style={{ visibility: "hidden" }}
              id="file"
              accept="/*"
              onChange={GetTheFile}
            />
          </div>
        </div>

        <h3 style={{ padding: "0 3% 10px" }}>{file?.name}</h3>

        <div className="wapper__postBtn">
          <button onClick={UploadFile}>post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
