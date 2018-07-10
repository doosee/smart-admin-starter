import template from './layout.html';
import $ from 'jquery';
import { menu } from './menu';
import { rootSelector } from '../config'

class Layout {
  constructor() {
    this.root = rootSelector;
    this.$root = $(rootSelector);
    this.data = {};
    this.template = template;
    this.$el = $(this.template);
    this.dataBinder = null;
    this.menuRootSelector = '[data-menus]';
    this.$menu = null;
  }

  render() {
    this.$root.empty();
    this.$el = this.$el.appendTo(this.root);
    // 渲染菜单
    this.menuRender();
  }

  menuRender() {
    console.count('menuRender');
    this.$menu = menu.render(this.menuRootSelector);
  }
}

export const layout = new Layout();