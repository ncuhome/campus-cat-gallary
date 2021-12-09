//该页面用来引入并暴露相关接口，相当于接口汇总(每配置一个模块的接口，都要在这里汇总，别忘了)
import codes from './statecode.js';   //状态码
import login from './login.js'; 
import register from './register.js';   //登录页面
import postcard from './postcard.js';   //产品页面
 
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    statecode: codes,
    ...login,
}