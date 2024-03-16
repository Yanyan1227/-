import hyRequest from "@/service";

export interface IAccount {
  name:string
  password:string
}

export interface ILoginResult{
  id:number
  name:string
  token:string
}
export interface IDataType<T =any>{
  code:number,
  data:T
}

enum LoginAPI {
  accountLogin ='/login',
  LoginUserInfo ='/users/',
  UserMenus='/role/'
}

export function accountLoginRequest(account:IAccount){
  return hyRequest.post<IDataType<ILoginResult>>({
    url:LoginAPI.accountLogin,
    data:account,
  })
}
export function requestUserInfoById(id:number){
  return hyRequest.get<IDataType>({
    url:LoginAPI.LoginUserInfo+id,
  })
}
export function requestMenusByRoleId(id:number){
  return hyRequest.get<IDataType>({
    url:LoginAPI.UserMenus+id+'/menu',
  })
}
