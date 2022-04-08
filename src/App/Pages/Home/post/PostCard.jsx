import React, { useState } from "react";

// components/ Elements
import Avatar from "@mui/material/Avatar";
import CommentsSec from "./CommentsSec";

// styles
import "../../../styles/post/postcard.css";

// icons
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { BiShare } from "react-icons/bi";

const PostCard = () => {
  const [OpenComments, setOpenComments] = useState(false);

  return (
    <div className="postcard">
      {/* header */}
      <div className="postcard__top">
        <div className="postcard__top-left">
          <div className="userProfile">
            <Avatar alt="Remy Sharp" src="/broken-image.jpg"></Avatar>
            <div className="userInfo">
              <h4>x hunter</h4>
              <span>20 Mar 8pm</span>
            </div>
          </div>
        </div>

        <div className="postcard__top-right">
          <HiDotsHorizontal className="icon" />
        </div>
      </div>

      {/* body */}
      <div className="postcard__image">
        <img src="https://scontent.fhdd4-1.fna.fbcdn.net/v/t39.30808-6/278047420_137066635512223_6901095229187063210_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeFPlAHSqLtrShUl9kNibXjAZOaz0DqCoQxk5rPQOoKhDOl9voSnana9PHNuhOix8OxTEoCtGTNG41xJd0SrnUY3&_nc_ohc=6KSYVHCy0r0AX-uFUCP&_nc_ht=scontent.fhdd4-1.fna&oh=00_AT_Vgot4N76klrEFImTnHFFHHE5Rq7bZsWxwh5vDAeSpqQ&oe=625382E7" />
      </div>

      {/* footer */}

      <div className="postcard__footer">
        <div className="footer__status">
          <div className="footer__status-like">
            <span>
              <h5>45</h5> Likes
            </span>
          </div>

          <div className="footer__status-comments">
            <span>
              <h5>20</h5> comments
            </span>
          </div>
        </div>

        {/* buttons */}
        <div className="footer__buttons">
          <div className="button">
            <AiOutlineLike className="icon" />
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
      {OpenComments && <CommentsSec />}
    </div>
  );
};

export default PostCard;
