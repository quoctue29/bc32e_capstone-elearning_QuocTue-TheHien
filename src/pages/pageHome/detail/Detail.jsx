import moment from "moment";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { quanLyCourseServices } from "../../../services/quanLyCourseServices";
import { Rate } from "antd";
//import styled from "styled-components";
const Detail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [detail, setDetail] = useState({});

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
    <div >
      <div className="py-3 grid sm:grid-cols-2 md:grid-cols-5">
        <div className="md:col-span-1">
          <img 
            src={detail?.hinhAnh}
            className="w-full"
            alt={detail?.biDanh}
          />
        </div>

        <div className="md:col-span-3 sm:px-3 pt-3 sm:pt-0">
          <p className="text-3xl font-semibold text-amber-500 m-0">{detail?.tenKhoaHoc}</p>
          <p>Mô tả:{detail?.moTa}</p>
          <p>Lượt xem: {detail?.luotXem}</p>
          <p>{moment(detail?.ngayTao).format("DD-MM-YYYY hh:mm")}</p>
          <p> Đánh giá : <Rate
                  allowHalf
                  disabled
                  value={(5 / 10) * detail.danhGia}
                />
                 </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
