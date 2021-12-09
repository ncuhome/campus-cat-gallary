import axios from 'axios';  //引入axios
import { base } from "./config.js";  //引入请求地址
import cookie from 'react-cookies';//引入cookie保存登录信息

import {message} from 'antd';

export default {

        //***登录 （POST）*** 
        async loginApi(params){   //在接口命名时，后面加上Api，这样容易区分
          let formData = new FormData();  //以FormData的形式提交,注意FormData的首字母大写
          formData.append("name",params.id);
          formData.append("version",params.version);
          formData.append('idcard',params.idcard);  
          formData.append('name',params.name);  
          return await axios.post(`${base}/api/demo/login`,params).then((res)=>{  //登录接口不需要请求头，不仅如此，请求头里的cookie还是由登陆接口的获取的，存储下来后给其他接口使用
              return res.data;
          }).catch((error)=>{
              message.error("服务器出错")
          })
        }