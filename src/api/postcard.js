import axios from 'axios';  //引入axios
import { base } from "./config.js";  //引入请求地址
import cookie from 'react-cookies'; //引入cookie保存登录信息
import { useAlert } from "react-alert"


export default {
  //***登录 （POST）*** 
  async postPersonInfo(params){
    let formData = new FormData();  //以FormData的形式提交,注意FormData的首字母大写
    formData.append("",params.name);
    formData.append("password",params.key);  
    return axios.post(`${base}/api/product/name`,formData,{
        headers:{
            "token":cookie.load("usertoken"),
            'Content-Type':'multipart/form-data',    //设置类型
        }
    }).then((res)=>{
        return res.data;
    }).catch((error)=>{
        elert.error("服务器错误")
    })
}