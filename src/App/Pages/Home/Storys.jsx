import { useState, useEffect, useRef } from "react";

// components/ Elements
import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "../../styles/storys.css";

import "swiper/css";

const Storys = () => {
  return (
    <div className="storys">
      <Swiper
        className="storys__wapper"
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={15}
        grabCursor={false}
      >
        <SwiperSlide className="storys__card">
          <img src="https://images.unsplash.com/photo-1622597717490-db8c23943f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <div className="storys__userAvatar">
            <img
              src="https://media.istockphoto.com/photos/3d-simple-rainbow-snapshot-camera-with-lens-on-pastel-background-with-picture-id1308083607?b=1&k=20&m=1308083607&s=170667a&w=0&h=5pcEUtjvmq7_PAmneHgxStCP9LgHuZeApznUxmrSDcI="
              alt="x"
            />
          </div>
          <span className="storys__userName">X Hunter</span>
        </SwiperSlide>

        <SwiperSlide className="storys__card">
          <img src="https://images.unsplash.com/photo-1622597717490-db8c23943f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <div className="storys__userAvatar">
            <img
              src="https://media.istockphoto.com/photos/3d-simple-rainbow-snapshot-camera-with-lens-on-pastel-background-with-picture-id1308083607?b=1&k=20&m=1308083607&s=170667a&w=0&h=5pcEUtjvmq7_PAmneHgxStCP9LgHuZeApznUxmrSDcI="
              alt="x"
            />
          </div>
          <span className="storys__userName">X Hunter</span>
        </SwiperSlide>

        <SwiperSlide className="storys__card">
          <img src="https://images.unsplash.com/photo-1622597717490-db8c23943f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <div className="storys__userAvatar">
            <img
              src="https://media.istockphoto.com/photos/3d-simple-rainbow-snapshot-camera-with-lens-on-pastel-background-with-picture-id1308083607?b=1&k=20&m=1308083607&s=170667a&w=0&h=5pcEUtjvmq7_PAmneHgxStCP9LgHuZeApznUxmrSDcI="
              alt="x"
            />
          </div>
          <span className="storys__userName">X Hunter</span>
        </SwiperSlide>

        <SwiperSlide className="storys__card">
          <img src="https://images.unsplash.com/photo-1622597717490-db8c23943f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <div className="storys__userAvatar">
            <img
              src="https://media.istockphoto.com/photos/3d-simple-rainbow-snapshot-camera-with-lens-on-pastel-background-with-picture-id1308083607?b=1&k=20&m=1308083607&s=170667a&w=0&h=5pcEUtjvmq7_PAmneHgxStCP9LgHuZeApznUxmrSDcI="
              alt="x"
            />
          </div>
          <span className="storys__userName">X Hunter</span>
        </SwiperSlide>

        <SwiperSlide className="storys__card">
          <img src="https://images.unsplash.com/photo-1622597717490-db8c23943f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <div className="storys__userAvatar">
            <img
              src="https://media.istockphoto.com/photos/3d-simple-rainbow-snapshot-camera-with-lens-on-pastel-background-with-picture-id1308083607?b=1&k=20&m=1308083607&s=170667a&w=0&h=5pcEUtjvmq7_PAmneHgxStCP9LgHuZeApznUxmrSDcI="
              alt="x"
            />
          </div>
          <span className="storys__userName">X Hunter</span>
        </SwiperSlide>

        <SwiperSlide className="storys__card">
          <img src="https://images.unsplash.com/photo-1622597717490-db8c23943f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          <div className="storys__userAvatar">
            <img
              src="https://media.istockphoto.com/photos/3d-simple-rainbow-snapshot-camera-with-lens-on-pastel-background-with-picture-id1308083607?b=1&k=20&m=1308083607&s=170667a&w=0&h=5pcEUtjvmq7_PAmneHgxStCP9LgHuZeApznUxmrSDcI="
              alt="x"
            />
          </div>
          <span className="storys__userName">X Hunter</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Storys;
