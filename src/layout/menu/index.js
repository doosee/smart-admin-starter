import template from './index.html'
import { Binder } from "../../public/binder";
import $ from 'jquery';
import { menus } from '../../config'

const data = { menus };

class MenuComponent {
  constructor() {
    this.data = data;
    this.template = template;
    this.$el = $(this.template);
    this.dataBinder = null;
  }

  /**
   * 渲染菜单
   * @param root {string|JQuery|Element} 渲染菜单的位置，可以是 选择器 | JQuery 对象 | Element 实例
   * @returns {JQuery}
   */
  render(root) {
    this.dataBinder = new Binder(this.$el, this.data);
    return this.$el.appendTo(root);
  }
}

export const menu = new MenuComponent();