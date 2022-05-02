import http from '@/network/axios.js'

export const getDetailDataById =async (iid)=>{
  // 拼接
  const {data:res} = await http(`/detail?iid=${iid}`)
  return res
}