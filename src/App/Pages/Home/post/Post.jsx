import { useState, useEffect } from "react";

// components/Elements
import AddPost from "./AddPost";
import PostCard from "./PostCard";
import { db } from "../../../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

// styles
import "../../../styles/post/post.css";

const Post = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "post");
    const q = query(collectionRef);
    const display = onSnapshot(q, (snapshot) => {
      setpost(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  console.log(post);

  return (
    <div className="post">
      <AddPost />
      {post.map(({ id, data: { file, time, username, userprofile } }) => {
        return (
          <PostCard
            key={id}
            id={id}
            file={file}
            time={time}
            username={username}
            userprofile={userprofile}
          />
        );
      })}
    </div>
  );
};

export default Post;
