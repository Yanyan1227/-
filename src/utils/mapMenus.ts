import type {IBreadcrumb} from "@/baseUI/breadcrumb/src/IBreadcrumb";
import breadcrumb from "@/baseUI/breadcrumb";

export function mapMenusToRoutes(userMenus: any) {
  const routes = []

  const allRoutes = []
  const routeFiles = import.meta.glob('../router/**/*.ts', {eager: true})
  // console.log(routeFiles)
  Object.keys(routeFiles).forEach((fileName) => {
    allRoutes.push({
      path: fileName.replace(/(\.\/|\.ts)/g, '').slice(7),
    })
  })
  // console.log(allRoutes)
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus.data)

  return routes
}

export function pathMapToBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenus(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenus(userMenus: any[], currentPath: string, breadcrumbs?: IBreadcrumb[]): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenus(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({name: menu.name,path:menu.url})
        breadcrumbs?.push({name: findMenu.name,path:findMenu.url})
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}


