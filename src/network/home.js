import http from './axios'

// home上半部的数据请求
export const getData = ()=>{
  // 先是resolve 
  return new Promise((resolve,reject)=>{
    http('/home/multidata')
    .then((res)=>{
      resolve(res)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

// 商品列表
// http://152.136.185.210:7878/api/hy66/home/data?type=pop&page=1
export const getHomeGoodsList = async (type,page)=>{
  const {data:res} = await http('/home/data',{
    params:{
      type:type,
      page:page
    }
  })
  
  return res
}