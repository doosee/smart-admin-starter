import html from './index.html';
import { linkComponent } from "./links";

class HomePage {
  constructor() {
    this.template = html;
    this.data = {
      title: "首页",

      // 面包屑
      breadcrumb: [{ link: '/', title: '作业管理' }, { title: '首页' }]
    }
  }

  /**
   * 初始化页面
   * @description 每次加载页面都会执行一遍，将会接收到一个 routeCache 的对象。
   * @param routeCache.route {Object} - router 实例。
   * @param routeCache.$template {jQuery} - 当前页面的模板，jquery 实例。包含双向绑定数据
   * @param routeCache.dataBinder {Object} - 数据绑定的实例。使用方法 详见：http://rivetsjs.com/docs/reference/
   */
  render(routeCache) {
    console.count($('[dev-data]').text());
    this.data.title = "首页" + Math.random();

    let data = {count:1};

    // 加载子组件并传值
    $('home-card-link').html(linkComponent.render(data));

    setInterval(() => data.count++, 1000);

    routeCache.$template.after('aaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbb')
  }
}

export const page = new HomePage();
export const template = page.template;
export const data = page.data;
export const render = page.render;
