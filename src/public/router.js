import $ from 'jquery';
import { routes } from "../routes";
import { breadcrumb } from "./breadcrumb";
import { Binder } from "./binder";

/**
 * @type {{route: {path: Array, search: {}, hash: string | * | string}, $template: jQuery, dataBinder: Binder}[]}
 * @private
 */
let _ROUTE_CACHE = [];

// todo delete
window.$ = $;

class Routes {
  constructor() {
    this.outerLet = '#content';
    this.base = '../pages';
    this.routes = routes;
    this.linkAttr = `link`
  }

  init() {
    this.addListener();
    this.checkHash();
  }

  /**
   * 路由解析
   * @returns {{path: Array, search: {}, hash: string | * | string}}
   */
  getParameters() {
    let hash = location.hash;
    const data = {
      path: [],
      search: {},
      hash: (hash.match(/[^#](#.*$)/) || [])[1] || ''
    };

    if (!/^#\//.test(hash)) return data; //禁止非路由规范
    hash = hash.replace(/^#\//, '').replace(/([^#])(#.*$)/, '$1').split('/') || [];

    //提取Hash结构
    hash.forEach(function (item) {
      /^\w+=/.test(item) ? function () {
        item = item.split('=');
        data.search[item[0]] = item[1];
      }() : data.path.push(item);
    });

    return data;
  }

  getPath() {
    return `/${this.getParameters().path.join('/')}`
  }

  // add listener
  addListener() {

    // 绑定全局 hash 事件
    window.addEventListener('hashchange', (event) => {
      this.checkHash();
      event.preventDefault()
    });

    // 绑定 [link] 的点击事件
    $('body').on('click', `[${this.linkAttr}]`, (e) => {
      const $el = $(e.currentTarget);

      location.hash = $el.attr(this.linkAttr);
      e.preventDefault();
      return false;
    })
  }

  checkHash() {
    routes.forEach(route => {
      if (route.path === this.getPath()) {
        return this.loadPage(route)
      }
    });
  }

  /**
   * @param route.local {string}
   * @param route.path {Promise}
   */
  async loadPage(route) {
    const page = await route.local;
    /**
     * @type {{route: {path: Array, search: {}, hash: string | * | string}, $template: jQuery|null, dataBinder: Binder|null}}
     */
    const routeCahce = {
      route,
      $template: null,
      dataBinder: null
    };

    // 清空视图
    $(this.outerLet).empty();

    // 渲染新视图
    routeCahce.$template = $(page.template).appendTo($(this.outerLet));

    // 绑定数据
    routeCahce.dataBinder = new Binder(routeCahce.$template, page.data || {});

    // 解除绑定
    _ROUTE_CACHE.forEach(cache => {
      if (cache && cache.dataBinder) {
        cache.dataBinder.unbind()
      }
    });

    // 缓存路由状态
    _ROUTE_CACHE.push(routeCahce);

    // 初始化状态并返回路由状态
    page.render(routeCahce);

    // 切换链接的状态
    $(`[${this.linkAttr}]`).each((i, el) => {
      const $el = $(el);
      const isActive = $el.attr(this.linkAttr) === this.getPath();
      $el.toggleClass('active', isActive);
      $el.parent('li').toggleClass('active', isActive);
    });

    // 面包屑
    breadcrumb.render(...page.data.breadcrumb || [])
  }

  /**
   * @param path {string}
   * @param prams {Object}
   */
  navigate(path, prams) {
    if (routes.some(route => route.path === path)) {
      location.hash = path
    }
  }

  activedRoute() {
    return _ROUTE_CACHE[_ROUTE_CACHE.length - 1]
  }

  push() {
    // todo router push
  };

  back() {
    // todo router back
  };

  getAllRoutes() {
    return _ROUTE_CACHE;
  }
}

//----------------------------

export const router = new Routes();

