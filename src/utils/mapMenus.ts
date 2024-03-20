export function mapMenusToRoutes(userMenus:any){
  const routes = []

  const allRoutes =[]
  const routeFiles = import.meta.glob('../router/**/*.ts',{ eager: true })
  // console.log(routeFiles)
  Object.keys(routeFiles).forEach((fileName)=>{
    allRoutes.push({
      path: fileName.replace(/(\.\/|\.ts)/g, '').slice (7),
    })
  })
  // console.log(allRoutes)
  const _recurseGetRoute = (menus:any[])=>{
    for (const menu of menus){
      if(menu.type ===2){
        const route = allRoutes.find((route) =>route.path ===menu.url)
        if(route)routes.push(route)
      }else{
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus.data)

  return routes

}
