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
        <form className="cover__form">
          <div className="input-group">
            <input
              type="text"
              className="bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Banner;
