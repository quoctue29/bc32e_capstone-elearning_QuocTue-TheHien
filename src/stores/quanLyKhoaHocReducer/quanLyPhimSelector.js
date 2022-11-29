import { useSelector } from 'react-redux'

export const useQuanLyKhoaHoc = () => useSelector((state) => state.quanLyKhoaHocReducer)