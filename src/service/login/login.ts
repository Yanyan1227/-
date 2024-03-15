import hyRequest from "@/service";

export interface IAccount {
  name:string
  password:string
}

export function accountLoginRequest(account:IAccount){
  return hyRequest.post({
    url:'/login',
    data:account,
  })
}

// hyRequest.request({
//   url:'',
//   method:"GET"
// }).then((res) =>{
//   // console.log(res.data)
// })
