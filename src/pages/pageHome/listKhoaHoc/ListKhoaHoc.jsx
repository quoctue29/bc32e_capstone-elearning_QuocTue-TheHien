import React from "react";
import { Divider, Tabs } from "antd";
//import KhoaHoc from "./KhoaHoc/KhoaHoc";
import { useDispatch } from "react-redux";
import { useQuanLyKhoaHoc } from "../../../stores/quanLyKhoaHocReducer/quanLyPhimSelector";
import { getKhoaHocList } from "../../../stores/quanLyKhoaHocReducer/quanLyKhoaHocReducer";
import { useEffect } from "react";
import { useState } from "react";
import { quanLyCourseServices } from "../../../services/quanLyCourseServices";
import { useNavigate } from "react-router-dom";
import "./card.css";
import { Col, Row } from "antd";
import { UserLogin } from "../../../constants/api";

export default function ListKhoaHoc() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ maDanhMuc: "BackEnd" });
  const [coures, setCoures] = useState([]);
  const { listKhoaHoc } = useQuanLyKhoaHoc();
  const { listDanhMuc } = useQuanLyKhoaHoc();
  const style = {
    padding: "8px 0",
  };
  console.log(listDanhMuc);
  useEffect(() => {
    (async () => {
      const res = await quanLyCourseServices.getKhoaHocTheoDanhMuc(filter);
      setCoures(res.data);
      console.log(res);
    })();
  }, [filter]);
  useEffect(() => {
    dispatch(getKhoaHocList());
  }, []);
  const handleChange = async (activeKey) => {
    setFilter({ ...filter, maDanhMuc: activeKey });
  };

  return (
    <div className="container" id="khoahoc">
      <Tabs defaultActiveKey="BackEnd" onChange={handleChange}>
        {listDanhMuc.length > 0 &&
          listDanhMuc.map((category, index) => (
            <Tabs.TabPane tab={category.tenDanhMuc} key={category.maDanhMuc}>
              <Row
                gutter={{
                  xs: 8,
                  sm: 16,
                  md: 24,
                  lg: 32,
                }}
              >
                {coures.map((khoaHoc, i) => (
                  <Col
                    className="gutter-row"
                    xs={24}
                    md={12}
                    lg={8}
                    xl={6}
                    span={6}
                    key={i}
                  >
                    <div className="card">
                      <div className="overflow-hidden">
                        <img
                          src={khoaHoc.hinhAnh}
                          alt=""
                          className="w-full h-[150px] "
                          title={khoaHoc.moTa}
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title">{khoaHoc.tenKhoaHoc}</h5>
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
                          // onClick={() =>
                          //   navigate(`/detail/${khoaHoc.maKhoaHoc}`)
                          // }
                          className="w-full font-bold transition duration-300 mb-0 bg-yellow-500 text-lg p-1  shadow hover:bg-red-600 "
                        >
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Tabs.TabPane>
          ))}
      </Tabs>
    </div>
  );
}
