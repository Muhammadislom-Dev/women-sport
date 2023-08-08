import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./FeedBack.css";

function FeedBack() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <div className="feedback">
        <div className="container">
          <h2>THOUGHTS ABOUT OUR WORK</h2>
          <div className="feedback_flex">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper"
              style={{
                minHeight: "400px",
                marginTop: "50px",
              }}>
              <SwiperSlide
                style={{
                  minHeight: "300px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  background: "transparent",
                }}>
                <div className="comment_box">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur quod non dolorem nobis autem modi. Adipisci
                    impedit dolor dolore pariatur quas tempora esse ipsam sunt.
                    Dolores aut in sapiente corrupti.
                  </p>
                  <h3>Alexandr Mahony</h3>
                </div>
                <div className="comment_box">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Incidunt, voluptate rerum maxime aspernatur, dicta dolore
                    debitis vitae dolorum ut, alias nobis commodi. Amet
                    explicabo repellendus possimus neque, aliquid omnis
                    deserunt.
                  </p>
                  <h3>Alexandr Mahony</h3>
                </div>
                <div className="comment_box">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus alias delectus modi, amet possimus ducimus
                    eligendi beatae magnam aut accusantium, autem hic, odio
                    animi quos molestias quibusdam soluta. Corrupti minus
                    obcaecati dolore dolores sequi saepe itaque sapiente?
                    Molestias voluptas voluptate, ad est illo nisi recusandae
                    explicabo accusamus rem itaque aperiam iste animi, fugit
                  </p>
                  <h3>Alexandr Mahony</h3>
                </div>
                <div className="comment_box">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur quod non dolorem nobis autem modi. Adipisci
                    impedit dolor dolore pariatur.
                  </p>
                  <h3>Alexandr Mahony</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide
                style={{
                  minHeight: "300px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  background: "transparent",
                }}>
                <div className="comment_box">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur quod non dolorem nobis autem modi.
                  </p>
                  <h3>Alexandr Mahony</h3>
                </div>
                <div className="comment_box">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur quod non dolorem nobis autem modi. Adipisci
                    impedit dolor dolore pariatur.
                  </p>
                  <h3>Alexandr Mahony</h3>
                </div>
                <div className="comment_box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequatur iste ut nam dolore ex esse maiores officia vel
                    soluta facere eos voluptatum nulla ab corrupti perspiciatis
                    iure atque aspernatur, vitae ea. Aperiam quos repellendus
                    mollitia corrupti ducimus hic aut tempore!
                  </p>
                  <h3>Alexandr Mahony</h3>
                </div>
                <div className="comment_box">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur quod non dolorem nobis autem modi. Adipisci
                  </p>
                  <h3>Alexandr Mahony</h3>
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

export default FeedBack;
