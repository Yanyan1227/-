import hyRequest from "@/service";

interface IAccount {
  name:string
  password:string
}

export function accountLoginRequest(account){
  return hyRequest.request({
    url:'/login',
    data:account,
    method:"POST",
  })
}

// hyRequest.request({
//   url:'',
//   method:"GET"
// }).then((res) =>{
//   // console.log(res.data)
// })
