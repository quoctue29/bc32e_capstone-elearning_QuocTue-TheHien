import React from "react";
import './intro.css';
const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__content">
        <div className="row " style={{display:"flex"}}>
          <div className="col-4">
            <div className="intro__item">
              <div className="intro__icon">
              <i className="fa-solid fa-graduation-cap" />

              </div>
              <div className="intro__details">
                <p>3890 Học viên offline</p>
                <p>Giảng viên 15 năm kinh nghiệm</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="intro__item">
              <div className="intro__icon">
              <i className="fa-solid fa-video" />

              </div>
              <div className="intro__details">
                <p>5014 video giảng dạy</p>
                <p>Bao gồm khóa học và video</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="intro__item">
              <div className="intro__icon">
              <i className="fa-solid fa-handshake" />

              </div>
              <div className="intro__details">
                <p>Trên 200 đối tác</p>
                <p>Ngoài nước và trong nước</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
