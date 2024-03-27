import hyRequest from "@/service";


export function getPageListData(url:string,queryInfo:string){
  return hyRequest.post({
    url:url,
    data:queryInfo
  })
}
