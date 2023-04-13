import axios from "axios";

const BaseURL = "https://elearningnew.cybersoft.edu.vn";
const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjkiLCJIZXRIYW5TdHJpbmciOiIxMi8wOS8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTQ0NzY4MDAwMDAiLCJuYmYiOjE2Nzc2MDM2MDAsImV4cCI6MTY5NDYyNDQwMH0._Rqf64wjEFiYvyTO1ebVw_Q5phbKYLalDcLoDn-rv0U";
export const MaNhom = "GP13";
export const UserLogin = "UserLogin";
export const AccessToken = "AccessToken";

export const api = axios.create();
api.interceptors.request.use((config) => {
  return {
    ...config,
    baseURL: BaseURL,
    headers: {
      TokenCybersoft: TokenCybersoft,
      Authorization: "Bearer " + JSON.parse(localStorage.getItem(AccessToken)),
    },
  };
});
