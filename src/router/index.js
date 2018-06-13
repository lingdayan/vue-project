import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import Util from '../libs/util';
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'
import {routers, otherRouter, appRouter} from './router';

Vue.use(Router)
/*路由配置*/
const RouterConfig = {
  routes: routers
}

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  const curRouterObj = Util.getRouterObjByName([otherRouter, ...appRouter], to.name);
  if (curRouterObj && curRouterObj.access !== undefined) { // 需要判断权限的路由
    if (curRouterObj.access === parseInt(Cookies.get('access'))) {
      Util.toDefaultPage([otherRouter, ...appRouter], to.name, router, next); // 如果在地址栏输入的是一级菜单则默认打开其第一个二级菜单的页面
    } else {
      next({
        replace: true,
        name: 'error-403'
      });
    }
  } else { // 没有配置权限的路由, 直接通过
    Util.toDefaultPage([...routers], to.name, router, next);
  }

});
