# JQuery project starter

## 安装
推荐 `yarn` 
```bash
yarn | npm i
```
## 添加页面
### 路由
`src/routes.js` 添加路由地址和需要动态加载的 js 文件
```javascript
export const routes = [
    { path: '/', local: import('src/pages/home') }
  ]
```
**API** 
```javascript
import {router} from 'src/public/router'

router.navigate('/home',{id:1});  // 导航到一个路由地址
router.getPath();  // 返回当前路由地址  ~->  '/home'
const activedRoute = router.activedRoute();   // 返回当前路由状态  ~-> {route, $template, dataBinder}

activedRoute.route   // ~-> {path: Array, search: {}, hash: string}
activedRoute.$template   //当前路由的 DOM 对象 ~-> jQuery 对象
activedRoute.binder   //当前路由的数据绑定 

```