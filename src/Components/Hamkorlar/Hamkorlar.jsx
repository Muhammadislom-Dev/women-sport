import React, { useRef } from "react";
import "./Hamkorlar.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Hamkorlar() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className="hamkorlar">
        <div className="container">
          <h2>Our Partners</h2>
          <div className="hamkor_flex">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
              style={{ height: "250px", marginTop: "20px" }}>
              <SwiperSlide
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "250px",
                }}>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://womeninsport.org/wp-content/uploads/2023/07/Sport-England-logo.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://womeninsport.org/wp-content/uploads/2023/07/Sports-Direct-logo.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/4BcEUINgXR-80mSShGbptw/640r480/d/5_2.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/qP5Eh4Qzbq_-wcRTvazKzA/640r480/d/lc-waikiki-manavgat-subesi.jpg"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://womeninsport.org/wp-content/uploads/2023/07/Partner-logos-for-site-3.png"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "250px",
                }}>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/k6-xZJB5yUTrKklZ6kSDQg/640r480/d/5fd8339ad95c5-logo.jpg"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/LhG1eq53Ul3RqdaKZN1wIg/640r480/d/screenshot_2.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/A9yv11OmAO9M_IyJA1w9kw/640r480/d/logo.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/7B5spOnDJ_DuFphudulP7g/640r480/d/screenshot_1.png"
                    alt="logo"
                  />
                </div>
                <div className="hamkor_pic_box">
                  <img
                    className="hamkor_pic"
                    src="https://luxyantex.uz/thumb/2/qP5Eh4Qzbq_-wcRTvazKzA/640r480/d/lc-waikiki-manavgat-subesi.jpg"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
              <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hamkorlar;
