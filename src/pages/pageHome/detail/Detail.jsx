import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { quanLyCourseServices } from "../../../services/quanLyCourseServices";
//import { quanLyKhoaHocActions } from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";

const Detail = () => {
  const [position, setPosition] = useState("left");
  const params = useParams();
  const dispatch = useDispatch();
  const [detail, setDetail] = useState({});
  window.onresize = () => {
    if (window.innerWidth <= 768) {
      setPosition("top");
    } else {
      setPosition("left");
    }
  };
  useEffect(() => {
    (async () => {
      const res = await quanLyCourseServices.getChiTietKhoaHoc(
        params.maKhoaHoc
      );
      setDetail(res.data);
      console.log(res);
    })();
  }, []);
  return (
    <div className="max-w-[1340px] w-full mx-auto px-6 py-12 min-h-[550px] container">
      <div className="flex">
        <img
          src={detail?.hinhAnh}
          className="w-[550px] h-[550px]"
          alt={detail?.biDanh}
        />

        <div className="col-8 ml-4 text-xl">
          <p>Tên khóa học: {detail?.tenKhoaHoc}</p>
          <p>Mô tả: {detail?.moTa}</p>
          <p>Lượt xem: {detail?.luotXem}</p>
          <p>Ngày tạo: {moment(detail?.ngayTao).format("DD-MM-YYYY hh:mm")}</p>
          <button  className="py-2 px-10 bg-yellow-400 rounded-md hover:bg-red-500 hover:text-white">
            Đăng ký ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
