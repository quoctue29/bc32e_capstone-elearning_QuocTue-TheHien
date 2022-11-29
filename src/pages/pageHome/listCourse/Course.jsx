import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";
import { UserLogin } from "../../../constants/api";
import "./course.css"


function Course(props) {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams({ danhSachKhoaHoc: true });
  const { listKhoaHoc } = props;

  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className=" container pb-10 pt-5 overflow-hidden">
      <div
        className="m-auto text-center text-2xl text-5xl font-bold align-middle"
        style={{ maxWidth: 1200 }}
      >
        <hr />
        <span className="text-gray-500">Các khóa học mới nhất</span>
      </div>
      <Slider {...settings} className="mx-5">
        {[...listKhoaHoc].reverse().map((khoaHoc, i) => (
          <div key={i}>
            <div className="p-5">
              <div className="card">
                <div className="overflow-hidden">
                  <img
                    src={khoaHoc.hinhAnh}
                    alt=""
                    className="w-full h-[250px] "
                    title={khoaHoc.moTa}
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title" >
                  {khoaHoc.tenKhoaHoc.slice(0,25)+"..."}
                  </h5>
                  <p class="card-text">{khoaHoc.moTa.slice(0,25)+"..."}</p>
                  <div class="card__star">
                    <span>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half"></i>
                    </span>
                    <span class="card__rate">{khoaHoc.danhGia}</span>
                    <span class="card__total">({khoaHoc.luotXem})</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <button 
                    onClick={() => {localStorage.getItem(UserLogin) ?  navigate(`/detail/${khoaHoc.maKhoaHoc}`)  : navigate('/user/login')}}
                    className="w-full font-bold transition duration-300 mb-0 bg-yellow-500 text-lg p-1  shadow hover:bg-red-600 "
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
export default memo(Course);

const Container = styled.div`
  &.Course {
    .slick-prev {
      width: initial;
      height: initial;
      left: 20px;
      bottom: -35px;
      top: auto;
      &::before {
        color: gray;
        font-size: 30px;
      }
    }
    .slick-next {
      width: initial;
      height: initial;
      bottom: -35px;
      right: 20px;
      top: auto;
      &::before {
        color: gray;
        font-size: 30px;
      }
    }
  }
`;
