import React from "react";
import "./banner.css";

const Banner = (props) => {
  const { Carosel } = props;
  return (
    <section className="cover">
      <div className="cover__content">
        <h1>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
        <p>
        Học thật, dự án thật, việc làm thật
        <br />
        Trở thành lập trình chuyên nghiệp 
        tại CyberLearn!
        </p>
      </div>
    </section>
  );
};

export default Banner;
